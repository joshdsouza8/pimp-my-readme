import React from "react";
import TextField from "@material-ui/core/TextField";
import "../../../styles/github-readme-builder.scss";
// import { useAlert } from "react-alert";
import { Copy } from "react-feather";

const MarkdownCopy = ({ markdown }) => {
    // const alert = useAlert();

    const copyToClipboard = () => {
        try {
            const el = document.createElement("textarea");
            el.value = markdown;
            document.body.appendChild(el);
            el.select();
            document.execCommand("copy");
            document.body.removeChild(el);
            // alert.success("Copied to Clipboard")
        } catch(e) {
            console.log(e);
            // alert.error("Failed to Copy to Clipboard")
        }
    }

    return (
        <>
        <div className="d-block py-5">
            <div className="pb-2">
                <h2 className="CoolComponent--Subtitle">Markdown</h2>
                <p className="CoolComponent--HelperText">
                    Simply copy & paste this markdown link wherever you want in your GitHub README profile.
                </p>
            </div>
            <div className="row">
                <div className="col-10 col-lg-11">
                    <TextField
                        InputLabelProps={{
                            shrink: true,
                        }}
                        placeholder="Placeholder"
                        fullWidth
                        required
                        value={markdown}
                        name="Placeholder"
                        className="bg-white"
                        variant="outlined"
                        disabled
                    />
                </div>
                <div className="col-2 col-lg-1">
                    <button
                        onClick={copyToClipboard}
                        className="btn btn-primary btn-lg w-100"
                    >
                        <Copy />
                    </button>
                </div>
            </div>
        </div>
        </>
    )
}

export {
    MarkdownCopy,
}