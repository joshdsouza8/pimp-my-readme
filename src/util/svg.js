const getSlidingTextWithEmojis = (text = "", emojiString = "") => {
    return `
        <svg xmlns="http://www.w3.org/2000/svg" height="100%" width="100%" viewBox="0 0 1200 90">
            <foreignObject width="100%" height="100%">
                <style>
                @media only screen and(max-width: 600px) {
                    .text {
                        font-size: 25px;
                    }
                    .emoji {
                        font-size: 25px;
                    }
                }
                .text {
                    color: black;
                    font-size: 40px;
                    font-weight: bold;
                    font-family: monospace;
                    padding-left: 30px;

                    animation-name: slideRight;
                    animation-direction: alternate;
                    animation-duration: 4s;
                    animation-iteration-count: infinite;
                    animation-timing-function: linear;
        
                    -webkit-animation-name: slideRight;
                    -webkit-animation-direction: alternate;
                    -webkit-animation-duration: 4s;
                    -webkit-animation-iteration-count: infinite;
                    -webkit-animation-timing-function: linear;  
                    
                }
                .textGradient {
                    background: -webkit-linear-gradient(#0000ff, rgb(255, 0, 0));
                    background-clip: text;
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }
                .emoji {
                    font-family: "Segoe UI Emoji";
                    font-size: 40px;
                }
                .container {
                    width: 100%;
                    height: 100%;
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    background-color: transparent;
                    justify-content: center;
                }
                
                @-webkit-keyframes slideRight {
                    0% {
                        transform: translateX(-100%);
                    }
                    75% {
                        transform: translateX(0%);
                    }
                    100% {
                        transform: translateX(0%);
                    }
                }

                @keyframes slideRight {
                    0% {
                        transform: translateX(-100%);
                    }
                    75% {
                        transform: translateX(0%);
                    }
                    100% {
                        transform: translateX(0%);
                    }
                }

                </style>
                    <div xmlns="http://www.w3.org/1999/xhtml">
                        <div class="container">
                            <div class="text">
                                <span class="textGradient">
                                    ${text}
                                </span>
                                    ${emojiString}
                            </div>
                        </div>
                    </div>
                </foreignObject>
            </svg>
            `
        }

const getWavyBanner = (title = "", subtitle = "") => {
    return `
    <svg fill="none" viewBox="0 0 800 400" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
    <foreignObject width="100%" height="100%">
        <div xmlns="http://www.w3.org/1999/xhtml">
            <style>
                @keyframes rotate {
                    0% { appe
                        transform: rotate(3deg);
                    }
                    100% {
                        transform: rotate(-3deg);
                    }
                }

                @keyframes gradientBackground {
                    0% {
                        background-position: 0% 50%;
                    }
                    50% {
                        background-position: 100% 50%;
                    }
                    100% {
                        background-position: 0% 50%;
                    }
                }

                @keyframes fadeIn {
                    0% {
                        opacity: 0;
                    }
                    50% {
                        opacity: 0.5;
                    }
                    100% {
                        opacity: 1;
                    }
                }

                .container {
                    font-family:
                        system-ui,
                        -apple-system,
                        'Segoe UI',
                        Roboto,
                        Helvetica,
                        Arial,
                        sans-serif,
                        'Apple Color Emoji',
                        'Segoe UI Emoji';
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    margin: 0;
                    width: 100%;
                    height: 400px;
                    background: linear-gradient(-45deg, #fc5c7d, #6a82fb, #05dfd7);
                    background-size: 600% 400%;
                    animation: gradientBackground 10s ease infinite;
                    border-radius: 10px;
                    color: white;
                    text-align: center;
                }

                h1 {
                    font-size: 50px;
                    letter-spacing: 5px;
                    text-transform: uppercase;
                    text-shadow:
                        0 1px 0 #efefef,
                        0 2px 0 #efefef,
                        0 3px 0 #efefef,
                        0 4px 0 #efefef,
                        0 12px 5px rgba(0, 0, 0, 0.1);
                    animation: rotate ease-in-out 1s infinite alternate;
                }

                p {
                    font-size: 20px;
                    text-shadow: 0 1px 0 #efefef;
                    animation-name: fadeIn;
                    animation-duration: 2s;
                }
                
                @media only screen and (max-width: 500px) {
                    h1 {
                        font-size: 25px;
                    }
                    p {
                        font-size: 18px;
                    }
                }
                
            </style>
            <div class="container">
                <h1>${title}</h1>
                <p>${subtitle}</p>
            </div>
        </div>
        </foreignObject>
    </svg>
    `
}

const getVisitorCounter = (count = 0) => {
    return `
    <svg xmlns="http://www.w3.org/2000/svg" height="100%" width="100%" viewBox="0 0 900 60">
        <foreignObject width="100%" height="100%">
        <style>
        .text {
            font-size: 40px;
            font-weight: bold;
            font-family: monospace;
            padding-left: 30px;
            background: -webkit-linear-gradient(white, grey);
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
        .container {
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: row;
            align-items: center;
            background-color: black;
            justify-content: center;
        }

        </style>
            <div xmlns="http://www.w3.org/1999/xhtml">
                <div class="container">
                    <div class="text">
                        # of visitors: ${count}
                    </div>
                </div>
            </div>
        </foreignObject>
    </svg>
    `
}

const getSocialIcons = (socialIcon) => {
    return `
    <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80">
        <foreignObject width="100%" height="100%">
        <style>
        .container {
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: row;
            align-items: center;
            background-color: transparent;
        }

        </style>
            <div xmlns="http://www.w3.org/1999/xhtml">
                <div class="container">
                ${socialIcon}
                </div>
            </div>
        </foreignObject>
    </svg>
    `;
}

const getTechnologiesSvg = (technologyString = "") => {
    return `
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 1000 320">
        <foreignObject width="100%" height="100%">
        <style>
        .container {
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: row;
            align-items: center;
            background-color: transparent;
            flex-wrap: wrap;
            align-content: center;
        }
        .item {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            margin-left: 10px;
            margin-right: 10px;
            margin-bottom: 10px;
            border: 1px solid #DBDBDB;
            box-sizing: border-box;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            border-radius: 5px;
            padding-left: 10px;
            padding-right: 10px;
            padding-top: 5px;
            padding-bottom: 5px;
            background-color: #f8f8ff;
        }
        .item-text {
            font-size: 14px;
            font-weight: bold;
            font-family: monospace;
            margin-left: 10px;
            margin-right: 10px;
        }

        </style>
            <div xmlns="http://www.w3.org/1999/xhtml">
                <div class="container">
                    ${technologyString}
                </div>
            </div>
        </foreignObject>
    </svg>
    `
}

module.exports = {
    getSlidingTextWithEmojis,
    getWavyBanner,
    getVisitorCounter,
    getSocialIcons,
    getTechnologiesSvg,
}