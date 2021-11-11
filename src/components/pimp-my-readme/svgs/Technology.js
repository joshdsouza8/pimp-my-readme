import React, { useState, useContext, useEffect } from "react";
import { MarkdownPreviewContext } from "../common/EditCoolComponent";
import "../../../styles/github-readme-builder.scss";
import { CommonTextField } from "../common/CommonTextField";
import { TECHNOLOGIES } from "../index";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import queryString from "query-string";
import { origin } from "../index";
import { Check, X } from "react-feather";
import Checkbox from "@material-ui/core/Checkbox";

const Technology = () => {
    const { setSrc, setMarkdown } = useContext(MarkdownPreviewContext);
    const [technology, setTechnology] = useState([]);
    const [techMap, setTechMap] = useState({});
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
        const source = `/pimp-my-readme/technology?${query}`;
        const md = `[![${tech}](${origin}/pimp-my-readme/technology?${query})](${origin})`
        setSrc(source);
        setMarkdown(md);
    }, [technology, otherTechnology]);


    const addToTechnology = (value) => {
        setTechMap(prevState => {
            return {
                ...prevState,
                [value]: true,
            }
        })
        setTechnology(prevState => {
            return [
                ...prevState,
                value,
            ]
        })
    }

    const removeTechnology = (tech) => {
        const elementIndex = technology.findIndex(el => el === tech);
        setTechMap(prevState => {
            return {
                ...prevState,
                [tech]: false,
            }
        })
        setTechnology(prevState => {
            prevState.splice(elementIndex, 1);
            return [...prevState];
        })
    }

    return (
        <div className="d-block pb-5">
            <p>Select your top Technologies</p>
            <div className="d-flex flex-wrap">
            {
                TECHNOLOGIES.map((tech, index) => (
                    <div className="d-inline p-3">
                        <Checkbox 
                        className="d-block"
                        color="primary"
                        onClick={() => {
                            if (techMap[tech]) {
                                removeTechnology(tech);
                            } else {
                                addToTechnology(tech);
                            }
                        }}
                        checked={techMap[tech]} />
                        <p className="d-block">{tech}</p>
                    </div>
                ))
            }
            </div>
            <CommonTextField
                name="Other Technology"
                value={otherTechText}
                onChange={e => setOtherTechText(e.target.value)}
            />
            {
                otherTechnology.map((tech, index) => (
                    <div className="badge text-dark mx-3 my-2 bg-white">
                        <span className="mx-2">{tech}</span>
                        <button
                            onClick={() => setOtherTechnology(prevState => {
                                prevState.splice(index, 1);
                                return [...prevState];
                            })}
                            className="btn btn-danger"><X /></button>
                    </div>
                ))
            }
            <small className="d-block pb-2">
                Don't see a technology you use? Type it above, and add it! :)
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