# Security Service Request System 
## About
This is group Gammas CMPT 373 Term Project.  We are developing a web application form to replace the current SFU security services request system with an online solution, that the "customer" can fill out the necessary information, which then will be automatically accessible to security for further processing.
We are using the MERN stack to complete this project, consisting of MongoDB (NoSQL Database), Express (Framework for web applications) , React (Front end framework - HTML/CSS etc.), and Node.js (Server side, back end framework) as the underlying frameworks.

## Initial setup instructions (Last edited 9/24/17)

The following instructions are for **Windows**. You can find a more detailed documentation (which includes other OS!) [here](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/development_environment). 

### Node.js

- Go [here](https://nodejs.org/en/) and install node.js. The LTS version should suffice, and follow the installation prompts.
- Test to make sure that both node.js and npm, the node package manager are installed properly. Use the following commands in a command prompt (I suggest git bash, the prompt that comes with installing git on your computer!) to test.

```
node -v
npm -v
```

You should get an output that looks like this:

```
node -v
v7.10.0

npm -v
4.2.0
```
### Express

- Express is simply another library we acquire from the node package manager (npm) of node.js. This should already be done in the skeleton code, so you shouldn't need to do anything!
- However, if you want to learn what is going on, please read [this](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/development_environment#Using_NPM). It will explain how to set it up on a new project.

### Additional npm commands

Please install dependencies using 'npm install' before build from source 

Here are several npm commands to build and deploy the application on your own working environment:

```
npm start
npm build
npm deploy
npm test
npm copy
npm clean
```

## Directory structure 

```
.
├── /build/                     # The folder for compiled output
├── /node_modules/              # 3rd-party libraries and utilities
├── /src/                       # The source code of the application; most of them are front-end stuff
├── /tools/                     # Build automation scripts and utilities
│   ├── /lib/                   # Library for utility snippets
│   ├── /build.js               # Builds the project from source to output (build) folder
│   ├── /bundle.js              # Bundles the web resources into package(s) through Webpack
│   ├── /clean.js               # Cleans up the output (build) folder
│   ├── /copy.js                # Copies static files to output (build) folder
│   ├── /deploy.js              # Deploys your web application
│   ├── /run.js                 # Helper function for running build automation tasks
│   ├── /runServer.js           # Launches (or restarts) Node.js server
│   ├── /start.js               # Launches the development web server with "live reload"
│   └── /webpack.config.js      # Configurations for client-side and server-side bundles
└── package.json                # The list of 3rd party libraries and utilities
```
## Coding style
Please follow this coding style when making commits to the respository: [Javascript ES6 Coding Style Guide](http://es6-features.org/#Constants)

## Current features
- To be filled!

## Group resources
Please take a look at the following resources to keep up with our current group activities:  

- [Weekly meeting summary (google doc)](https://docs.google.com/document/d/1DAsxf96ypMyuNfbaBrvUkC6CPIX9Hvi8qmMhc5HrUuI/edit?usp=sharing)
- [Iteration 1 customer requirements summary (google doc)](https://docs.google.com/document/d/16YwL5praOUuRy7GNxN219VJEGl4KNf1sNi21Z0sgkVc/edit)
- [Iteration 1 initial design concept (Last updated: 9/18/17)](http://puu.sh/xI7aE/4fb65bdaa8.jpg)
- [Initial customer project presentation (Last updated: 9/14/17) - Link attempts to download pptx file to your computer!](http://puu.sh/xI7kv/687fbc6111.pptx)
- [Our slack group (link)](https://cmpt373-gamma.slack.com/)


## Study resources
Please take a look at these following tutorials if you need to brush up on your understanding:

- [Introduction to JavaScript (w3schools)](https://www.w3schools.com/Js/)
- [Introduction to Node.js (w3schools)](https://www.w3schools.com/nodejs/)
- [Express/Node.js tutorial](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs)
- [React with Express/Node.js tutorial](https://daveceddia.com/create-react-app-express-backend/)


