# Pimp my README
This repository is the open-source project for Pimp my README.

## How this came to be
So basically, GitHub added a feature where you can add a "Profile Page" by uploading a README to a repo that has the same name as your account.

If you want to jazz up your profile a bit, you shouldn't spend hours doing so, so I made this quick project (during my company hackathon) that helps add some flavour to your README profiles.

So I present to you, Pimp my README. 

## Overview
Let's bring the blink tags back! Pimp my README is an open source profile builder that you can use to add some cool components to your README profile - Made with <3 by webapp.io :)

## Contributing
The stack is React + Express (we do server-side rendering). When a cool component is loaded a GET request is sent to our Express server where an SVG is populated with the query parameters and returned.

If you want to add a cool component:
- Make your SVG 
- Create a function to return your SVG with the parameters you need in `src/util/svg.js`
- Create a GET request to parse query params that calls the function you created in the step above
- Add a component that allows people to edit the parameters for the svg in `src/components/pimp-my-readme/svgs` 
- Add your component that was created in the step above to the `EditCoolComponent.js` file

### Bug Report
Please open an issue if you find a bug with a screenshot of the behaviour.

### Feature Suggestions
Add your suggested feature to the feature-suggestions.txt file.


### Environment Setup
- Clone the repo
- Run `npm install` in the root directory
- Run `npm run dev` to start the project locally

## License
See LICENSE

Some Cool Component Examples:
[![Pimp my README, an open-source project](https://pimp-my-readme.webapp.io/pimp-my-readme/wavy-banner?subtitle=an%20open-source%20project&title=Pimp%20my%20README)](https://pimp-my-readme.webapp.io)

[![Pimp my README](https://pimp-my-readme.webapp.io/pimp-my-readme/sliding-text?emojis=1f91f-1f3fe_1f60e_1f608_1f995&text=Pimp%2520my%2520README)](https://pimp-my-readme.webapp.io)

[![Visitor Counter for pimp-my-readme](https://pimp-my-readme.webapp.io/pimp-my-readme/visitor-counter?page=pimp-my-readme)}](https://pimp-my-readme.webapp.io)

[![JavaScript_HTML_CSS_NodeJS_Express_](https://pimp-my-readme.webapp.io/pimp-my-readme/technology?technology=JavaScript_HTML_CSS_NodeJS_Express_)](https://pimp-my-readme.webapp.io)

