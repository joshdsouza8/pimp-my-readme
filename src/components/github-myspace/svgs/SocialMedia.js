import React, { useState, useContext, useEffect } from "react";
import { MarkdownPreviewContext } from "../common/EditCoolComponent";
import "../../../styles/github-readme-builder.scss";
import { CommonTextField } from "../common/CommonTextField";
import { SOCIAL_MEDIA } from "../index";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import queryString from "query-string";
let origin = "https://github-readme.webapp.io";

const SocialMedia = () => {
    const { setSrc, setMarkdown } = useContext(MarkdownPreviewContext);
    const [socialMedia, setSocialMedia] = useState(SOCIAL_MEDIA[0]);
    const [socialLink, setSocialLink] = useState("");

    useEffect(() => {
        origin = window.location.origin;
    }, []);

    useEffect(() => {
        const params = {
            social: socialMedia,
        }
        const query = queryString.stringify(params);
        const src = `/github-readme-builder/social-media?${query}`
        const md = `[![${socialMedia}](${origin}/github-readme-builder/social-media?${query})](${socialLink})`
        setSrc(src);
        setMarkdown(md);
    }, [socialMedia, socialLink]);
    return (
        <div className="d-block">
            <p>Select a Social Media</p>
            <Select
                label="Social Media"
                InputLabelProps={{
                    shrink: true,
                }}
                placeholder="Social Media"
                variant="outlined"
                fullWidth
                required
                value={socialMedia}
                name="Social Media"
                className="bg-white"
                onChange={e => setSocialMedia(e.target.value)}
            >
                {
                    SOCIAL_MEDIA.map((sm, index) => (
                        <MenuItem value={sm}>
                            {sm}
                        </MenuItem>
                    ))
                }
            </Select>
            <CommonTextField
                name="Social Link"
                value={socialLink}
                onChange={e => setSocialLink(e.target.value)}
            />
            <small>Enter the direct link to your social media profile (I.e.,
            <a href="https://twitter.com/webappio"> https://twitter.com/webappio</a>
            ).
            </small>
        </div>
    )
}

export default SocialMedia;