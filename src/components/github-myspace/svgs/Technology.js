import React, { useState, useContext, useEffect } from "react";
import { MarkdownPreviewContext } from "../common/EditCoolComponent";
import "../../../styles/github-readme-builder.scss";
import { CommonTextField } from "../common/CommonTextField";
import { TECHNOLOGIES } from "../index";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import queryString from "query-string";
let origin = "https://github-readme.webapp.io";

const Technology = () => {
    const { setSrc, setMarkdown } = useContext(MarkdownPreviewContext);
    const [technology, setTechnology] = useState([]);
    const [otherTechnology, setOtherTechnology] = useState([]);
    const [otherTechText, setOtherTechText] = useState("");

    useEffect(() => {
        origin = window.location.origin;
    }, []);

    useEffect(() => {
        const tech = technology.join("_") + "_" + otherTechnology.join("_");
        const params = {
            technology: tech,
        };
        const query = queryString.stringify(params);
        const source = `/github-readme-builder/technology?${query}`;
        const md = `[![${tech}](${origin}/github-readme-builder/technology?${query})](${origin})`
        setSrc(source);
        setMarkdown(md);
    }, [technology, otherTechnology]);

    return (
        <div className="d-block pb-5">
            <p>Select your top Technologies</p>
            <Select
                label="Social Media"
                InputLabelProps={{
                    shrink: true,
                }}
                placeholder="Social Media"
                variant="outlined"
                fullWidth
                required
                multiple
                name="Social Media"
                className="bg-white"
                value={technology}
                onChange={e => setTechnology(e.target.value)}
            >
                {
                    TECHNOLOGIES.map((tech, index) => (
                        <MenuItem value={tech}>
                            {tech}
                        </MenuItem>
                    ))
                }
            </Select>
            <small>Select one or multiple.</small>
            <CommonTextField
                name="Other Technology"
                value={otherTechText}
                onChange={e => setOtherTechText(e.target.value)}
            />
            {
                otherTechnology.map((tech, index) => (
                    <div className="badge badge-light border-dark mx-3 my-2 bg-white">
                        <span className="mx-2">{tech}</span>
                        <button
                            onClick={() => setOtherTechnology(prevState => {
                                prevState.splice(index, 1);
                                return [...prevState];
                            })}
                            className="btn btn-danger"><i className="feather icon-x" /></button>
                    </div>
                ))
            }
            <small className="d-block pb-2">
                Don't see a technology you use? Type it above, and add it.
            </small>
            <button
                className="btn btn-outline-primary"
                onClick={() => {
                setOtherTechnology(prevState => {
                    return [
                        ...prevState,
                        otherTechText,
                    ]
                })
            }}>
                Add Other Technology
            </button>
        </div>
    )
}

export default Technology;