const CoolComponents = {
    SlidingText: "SlidingText",
    WavyBanner: "WavyBanner",
    VisitorCounter: "VisitorCounter",
    SocialMedia: "SocialMedia",
    TopTech: "TopTech",
}

const PREVIEW_SOURCES = {
    WavyBanner: {
        src: "/github-readme-builder/wavy-banner?title=JellyBear&subtitle=I%27m%20the%20webapp.io%20mascot%20:)",
        component: CoolComponents.WavyBanner,
    },
    SlidingText: {
        src: "/github-readme-builder/sliding-text?text=Hey, I'm Jellybear!&emojis=1f419_1f43b",
        component: CoolComponents.SlidingText,
    },
    VisitorCounter: {
        src: "/github-readme-builder/visitor-counter?page=webapp.io",
        component: CoolComponents.VisitorCounter,
        helperText: "Show the number of visitors that have viewed your GitHub profile or a certain project."
    },
    SocialMedia: {
        src: "/github-readme-builder/social-media?social=Facebook",
        component: CoolComponents.SocialMedia,
        helperText: "Show icons to your social media profiles."
    },
    TopTech: {
        src: "/github-readme-builder/technology?technology=javascript_react_aws_html_css_python_java_nodejs_golang_elixir_mysql_postgres_mongodb_redis_aws_react_express_flask_other",
        component: CoolComponents.TopTech,
        helperText: "Display the tech you know."
    }
}


const SOCIAL_MEDIA = [
    "Facebook",
    "YouTube",
    "WhatsApp",
    "Instagram",
    "WeChat",
    "TikTok",
    "Twitch",
    "Twitter",
    "Quora",
    "Stack Overflow",
    "Reddit",
    "LinkedIn",
]

const TECHNOLOGIES = [
    "JavaScript",
    "HTML",
    "CSS",
    "AWS",
    "ReactJS",
    "Python",
    "Java",
    "NodeJS",
    "Golang",
    "MySQL",
    "PostgreSQL",
    "MongoDB",
    "Redis",
    "AWS",
    "ReactJS",
    "Express",
    "Flask",
]

export {
    CoolComponents,
    PREVIEW_SOURCES,
    SOCIAL_MEDIA,
    TECHNOLOGIES,
}