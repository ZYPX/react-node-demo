import React from 'react';
import './pages.css';
import nodejsPic from '../assets/nodejs.jpg';
import reactThumb from '../assets/reactjs-thumb.jpg';
import initializePic from '../assets/init.png';
import indexjsPic from '../assets/indexjs.png';
import indexjsPic2 from '../assets/index2js.png';
import packageJson from '../assets/packagejson.png';
import createReact from '../assets/createReact.png';
import packageJson2 from '../assets/packagejson2.png';
import heroku from '../assets/heroku.png';
import herokuCLI from '../assets/herokucli.png';
import herokuDeploy from '../assets/herokuDeploy.png';

const Page2 = () => {
    return (
        <div className="container">
            <h2>Installation and Deployment</h2>
            <br/>
            <br/>
            <br/>
            <br/>
            <h2>Installing node.js and setting up the backend</h2>
            <br/>
            <br/>
            <img src={nodejsPic} alt="Nodejs"/>
            <div className="point">
                <p className="pointItem">Download Node.js from <a className="refLink" href="https://nodejs.org/en/">The Official Website</a></p>
                <p className="pointItem">Create a folder for your project and inside the folder create another folder for the backend part of the project. CD into the backend folder and in terminal or cmd, type the following commands</p>
                <img className="pointItem bodyImage" src={initializePic} alt="npm init -y"/>
                <p className="pointItem">Create a a file called index.js which will serve as the backend server using Express</p>
                <img className="pointItem bodyImage" src={indexjsPic} alt="index.js"/>
                <p className="pointItem">Note the line that changes the server's port number to 3001 because the React server will be running on port 3000</p>
                <p className="pointItem">Locate the package.json file that the "npm init -y" command created and make the following edit</p>
                <img className="pointItem bodyImage" src={packageJson} alt="package.json"/>
                <p className="pointItem">You are now ready to create your own backend api using node.js and express</p>
            </div>
            <br/>
            <br/>
            <h2>Installing React.js and setting up the frontend</h2>
            <br/>
            <br/>
            <img src={reactThumb} alt="react"/>
            <div className="point">
                <p className="pointItem">Navigate back to the main project folder and in the terminal, execute the following command</p>
                <img className="pointItem bodyImage" src={createReact} alt="npx create-react-app client"/>
                <p className="pointItem">This command creates the necessary files and folders for your React app</p>
                <p className="pointItem">Next, locate the package.json file created by the npx command and perform the following edit</p>
                <img className="pointItem bodyImage" src={packageJson2} alt="npx create-react-app client"/>
                <p className="pointItem">You can add your html/css components to your App.js file and start the frontend React.js server using the command "npm start" while in the client folder</p>
            </div>
            <br/>
            <br/>
            <h2>Deploying React + Node.js app to Heroku</h2>
            <br/>
            <br/>
            <img src={heroku} alt="react"/>
            <div className="point">
                <p className="pointItem">First, delete the git repo that was automatically made by the React portion of the setup.</p>
                <p className="pointItem">Navigate into the backend folder and make the following edits to index.js</p>
                <img className="pointItem bodyImage" src={indexjsPic2} alt="index.js"/>
                <p className="pointItem">Next, create a <a className="refLink" href="https://signup.heroku.com/">Heroku account</a></p>
                <p className="pointItem">Go to the dashboard and go to New - Create new app and fill in your desired app name</p>
                <p className="pointItem">Then, open the terminal and install the Heroku CLI</p>
                <img className="pointItem bodyImage" src={herokuCLI} alt="Heroku CLI install"/>
                <p className="pointItem">Finally, run the following commands in your terminal. These can be found in the deploy tab of your Heroku app dashboard</p>
                <img className="pointItem bodyImage" src={herokuDeploy} alt="Heroku deploy"/>
                <p className="pointItem">Your app should now be live and accessible via the url output to your terminal</p>
            </div>
            <br/>
            <br/>
            
        </div>
    )
}

export default Page2
