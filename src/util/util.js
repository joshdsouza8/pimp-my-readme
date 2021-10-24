const encodeStringForHTML = (rawStr = "") => {
    return rawStr.replace(/[\u00A0-\u9999<>\&]/gim, function(i) {
        return '&#' + i.charCodeAt(0) + ';';
    });
}

const isLocal = () => {
    if (window.location.origin === "http://localhost:3001") {
        return true;
    }
    return false;
}

module.exports = {
    encodeStringForHTML,
    isLocal,
}