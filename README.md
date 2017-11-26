# Security Service Request System (Last edited 11/26/17)
## About
This is group Gamma's CMPT 373 Term Project.  We are developing a web application form to replace the current SFU security services request system with an online solution, that the "customer" can fill out the necessary information, which then will be automatically accessible to security for further processing.
We are using the MERN(ish) stack to complete this project, consisting of MySQL, Express, React, and Node.js as the underlying frameworks. As of the current time, you can find a deployed version of our project [here](https://cmpt373-1177g.cmpt.sfu.ca/), hosted on a SFU VM.

## Project Description
The Security Service Request System is a system in which a user can fill out and send security service requests.
A security staff member can then see a list of pending requests and choose to review them. The security side of the request will be filled then by a staff member, then forwarded to the appropriate parties.

## Initial setup instructions (as of 11/26/17)
- Clone the project then follow the instructions (git clone repository-url-here)
- Remember to use 'sudo' if you have permission denied issues.   
  
- set up npm and node.js
- set up mysql
- install python3

- pip3 install PyPDF2
- pip3 install reportlab
- pip3 install requests
- pip3 install pandas
- pip3 install selenium
- pip3 install Faker

- Go to src/PyScripts/pyoptions.js and replace the python3 executable path (use command 'which python3' on your machine to find out this path)

- Replace scriptPath in the same file to PyScripts folder on your machine.

- $ mysqld //(command to run mysql server on local machine download mysql from https://dev.mysql.com/downloads/mysql/)
- open mysql shell (mysql -u root -p) and 'create database demodb;' if not already done
- change the password in db.js to your MySQL password, otherwise you will get an error with database queries.

- $ npm install
- $ npm start - This will host the project on localhost:3001

- Deployment instructions can be found at nginx-config/deployment-instructions.txt directory.

- You can check your node and npm versions with node or npm -v 

## Directory structure 
- You can find our directory structure in the file: ~Project-Information-Documents/directory-structure.txt

## Coding style and guidelines
- Please follow this coding style when making commits to the respository: [Javascript ES6 Coding Style Guide](http://es6-features.org/#Constants)
- Remember to check Slack twice a day for any updates! You can also install the Slack app on your phone to have notifications pushed to you! (Remember to mute #git-status though, it gets spammy)
- If you need help or have expected delays, communicate sooner rather than later. We are here to help you! There isn't all that much work (yet) for eight people, so pair programming is likely to happen so everyone has something to do.
- Finally, be transparent about what you're doing so everyone is up to date with what is going on. This will allow for a smooth team effort throughout the semester.


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
 
## Transport Layer Security (Already implemented)
Please take a look at the following to learn about TLS. We need to implement TLS v1.2 in our web application:

-[Our Gitlab wiki](https://csil-git1.cs.surrey.sfu.ca/sankaitk/CMPT373-Gamma/wikis/transport-layer-security-(tls)-information-and-implementation)
-[Wikipedia](https://en.wikipedia.org/wiki/Transport_Layer_Security)
-[Sitepoint security stack + node.js](https://www.sitepoint.com/how-to-use-ssltls-with-node-js/)
-[Node.js express middleware structure tutorial](https://blog.risingstack.com/your-first-node-js-http-server/)

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

