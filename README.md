# Security Service Request System (Last edited 10/04/17)
## About
This is group Gamma's CMPT 373 Term Project.  We are developing a web application form to replace the current SFU security services request system with an online solution, that the "customer" can fill out the necessary information, which then will be automatically accessible to security for further processing.
We are using the MERN(ish) stack to complete this project, consisting of a SQL database (name to be determined?), Express (Framework for web applications), React (Front end framework - HTML/CSS etc.), and Node.js (Server side, back end framework) as the underlying frameworks.

## Project Description
The Security Service Request System is a system in which a user can fill out and send security service request.
A security staff member can then see a list of pending requests and choose to review them. The security side of the request will be filled then by a staff member, then forwarded to the appropriate parties.

## Run instructions
- clone the project then follow the following commands
- $npm install (should have node package manager installed on your machine)
- $mysqld (command to run mysql server on local machine https://dev.mysql.com/downloads/mysql/)
- $npm start


## Initial setup instructions 
The following instructions are for **Windows**. You can find a more detailed documentation (which includes other OS!) [here](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/development_environment). 

## Dependencies
Listed below...

### Node.js

- Go [here](https://nodejs.org/en/) and install node.js. The LTS version should suffice, and follow the installation prompts.
- Test to make sure that both node.js and npm, the node package manager are installed properly. Use the following commands in a command prompt (I suggest git bash, the prompt that comes with installing git on your computer!) to test.
- As for developing on Windows. I suggest using [Atom](https://atom.io/). It allows you to see the directory tree of our project, which allows for efficient code modification.

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
- Troubleshooting tip: If you try to run express, and you get 'express: command not found' after installing it using 'npm install express-generator -g'; add the first directory to your Path (i.e: C:\Users\Aria\AppData\Roaming\npm\express). You can do this by going to 'control panel/system/advanced system settings/environment variables/system variables' and adding a new Path variable for where you installed it. [img1](http://puu.sh/xIYK4/d91613bc7d.png) [img2](http://puu.sh/xIYDe/a2185b9232.png) [img3](http://puu.sh/xIYLY/e452a33aa0.png) [Stackoverflow-source](https://stackoverflow.com/questions/39276576/bash-express-command-not-found)

### React.js

- To have React, our front end framework communicate with Express, our middle-ware, please read [this](https://daveceddia.com/create-react-app-express-backend/) guide.
- This step should be already completed in our master branch, so you don't need to worry about it either!

### Additional npm commands and information

Please install the required dependencies using 'npm install' before building from the source. You would do this inside the main directory that branches to everything else shown below in directory structure.
- Please also run "npm install semantic-ui-react --save" and "npm install semantic-ui-css --save" as well.

Here are several npm commands to help build and deploy the application on your own working environment:

```
npm start
npm build
npm deploy
npm test
npm copy
npm clean
```

### Directory structure 
Here is our current directory structure and a brief explaination of what everything is.

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

## Coding style and guidelines
- Please follow this coding style when making commits to the respository: [Javascript ES6 Coding Style Guide](http://es6-features.org/#Constants)
- Remember to check Slack twice a day for any updates! You can also install the Slack app on your phone to have notifications pushed to you! (Remember to mute #git-status though, it gets spammy)
- If you need help or have expected delays, communicate sooner rather than later. We are here to help you! There isn't all that much work (yet) for eight people, so pair programming is likely to happen so everyone has something to do.
- Finally, be transparent about what you're doing so everyone is up to date with what is going on. This will allow for a smooth team effort throughout the semester.

## Current features
- To be filled!

## Transport Layer Security
Please take a look at the following to learn about TLS. We need to implement TLS v1.2 in our web application:

-[Our Gitlab wiki](https://csil-git1.cs.surrey.sfu.ca/sankaitk/CMPT373-Gamma/wikis/transport-layer-security-(tls)-information-and-implementation)
-[Wikipedia](https://en.wikipedia.org/wiki/Transport_Layer_Security)
-[Sitepoint security stack + node.js](https://www.sitepoint.com/how-to-use-ssltls-with-node-js/)
-[Node.js express middleware structure tutorial](https://blog.risingstack.com/your-first-node-js-http-server/)

## Group resources
Please take a look at the following resources to keep up with our current group activities:  

- [Weekly tutorial name tag template](http://www.volkside.com/2009/05/workshop-name-plate-template/)
- [9/25/17 meeting - initial ticket/issue assignments](https://puu.sh/xIYaf/564f6c12f8.png)
- [9/25/17 meeting - issues/tickets (whiteboard picture)](https://puu.sh/xIY0E/7d68b2d65a.jpg)  
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

## Use Cases

Create Security Service Request
- User Launches web application
- User sees main page
- User selects option to submit a security service request form
- User sees a form to fill out with information regarding the event
- User fills form and submits by pressing complete

Variation 1
- User hits submit without filling out all appropriate fields
- System prompts for the fields
- System won't submit request until all fields are filled out

Variation 2
- User saves the form
- User sends form to third party who can authenticate it
- Third party finished form and submits it

Review Service Request
- Security User launches application
- Security sees main page
- Security logs in with credentials
- User sees list of requests
- User opens request to review it
- User fills out appropriate fields
- User chooses distribution (who to forward to)
- User completes the form and forwards it to the appropriate parties

Variation 1
- User sorts through list of request to see most recent
- User then proceeds to review request

Variation 2
- User fills in request partially
- User chooses not to complete the request and saves request
- System updates request status to work in progress

