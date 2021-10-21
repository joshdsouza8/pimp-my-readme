import React, { useState, useContext, useEffect } from "react";
import { MarkdownPreviewContext } from "../common/EditCoolComponent";
import "../../../styles/github-readme-builder.scss";
import { CommonTextField } from "../common/CommonTextField";
import { X } from "react-feather";
import queryString from "query-string";
import { origin } from "../index";
let Picker;

const SlidingText = () => {
    const { setSrc, setMarkdown } = useContext(MarkdownPreviewContext);
    const [text, setText] = useState("Hey, I'm Jellybear!");
    const [emojis, setEmojis] = useState([]);
    const [showPicker, setShowPicker] = useState(false);

    useEffect(() => {
        Picker = require("emoji-picker-react");
        origin = window.location.origin;
        setShowPicker(true);
    }, []);

    useEffect(() => {
        const emojiUnifiedCodes = emojis.reduce((arr, emoji) => {
            return [
                ...arr,
                emoji.unified,
            ]
        }, []);
        const emojiString = emojiUnifiedCodes.join("_");
        const params = {
            text: encodeURIComponent(text),
            emojis: encodeURIComponent(emojiString),
        };
        const query = queryString.stringify(params);
        const source = `/pimp-my-readme/sliding-text?${query}`;
        const md = `[![${text}](${origin}/pimp-my-readme/sliding-text?${query})](${origin})`;
        setSrc(source);
        setMarkdown(md);
    }, [text, emojis]);

    const selectEmoji = (event, emoji) => {
        setEmojis(prevState => {
            return [
                ...prevState,
                emoji
            ]
        })
    };

    const removeEmoji = (index) => {
        setEmojis(prevState => {
            prevState.splice(index, 1);
            return [
                ...prevState,
            ]
        })
    }

    return (
        <div className="d-block">
            <CommonTextField
                name="Title"
                value={text}
                onChange={e => setText(e.target.value)}
            />
            <p>Select your Emoji(s)</p>
            <div className="d-flex flex-row">
                {
                    emojis.map((emoji, index) => (
                        <div key={`emoji_${index}`} className="my-4">
                            <span className="badge badge-light CoolComponent--Emoji">
                                {emoji.emoji}
                            </span>
                            <button
                                onClick={() => removeEmoji(index)}
                                className="btn btn-danger ml-2 btn-sm">
                                    <X />
                            </button>
                        </div>
                    ))
                }
            </div>
            {
                showPicker ?
                React.createElement(Picker.default, { onEmojiClick: selectEmoji })
                :
                null
            }
        </div>
    )
}

export default SlidingText;