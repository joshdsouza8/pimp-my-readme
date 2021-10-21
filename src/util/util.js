const encodeStringForHTML = (rawStr = "") => {
    return rawStr.replace(/[\u00A0-\u9999<>\&]/gim, function(i) {
        return '&#' + i.charCodeAt(0) + ';';
    });
}

module.exports = {
    encodeStringForHTML,
}