
# Security Service Request System 
## About
This is group Gammas CMPT 373 Term Project.  We are developing a web application form to replace the current SFU security services request system with an online solution, that the "customer" can fill out the necessary information, which then will be automatically accessible to security for further processing.
We are using the MERN stack to complete this project, consisting of MongoDB (NoSQL Database), Express (Framework for web applications) , React (Front end framework - HTML/CSS etc.), and Node.js (Server side, back end framework) as the underlying frameworks.

## Initial setup instructions 

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



