import React from "react";
import TextField from "@material-ui/core/TextField";
import "../../../styles/github-readme-builder.scss";
import { Copy } from "react-feather";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const MarkdownCopy = ({ markdown }) => {

    const copyToClipboard = () => {
        try {
            const el = document.createElement("textarea");
            el.value = markdown;
            document.body.appendChild(el);
            el.select();
            document.execCommand("copy");
            document.body.removeChild(el);
            toast.success("Copied to Clipboard", { position: "bottom-center", hideProgressBar: true });
        } catch(e) {
            console.log(e);
            toast.error("Failed to Copy to Clipboard", { position: "bottom-center", hideProgressBar: true });
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
                <ToastContainer 
                    autoClose={2000}
                />
            </div>
            <small className="pt-2">Please note, there's a link in the markdown that points back to this page so others can find *Pimp my README* too. If you don't want to point back to this site, then please remove it.</small>
        </div>
        </>
    )
}

export {
    MarkdownCopy,
}