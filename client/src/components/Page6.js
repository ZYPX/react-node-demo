import React from 'react';
import './pages.css';
const Page6 = () => {
    return (
        <div className="container">
            <h2>Credits</h2>
            <div className="point">
                <p className="pointItem">Created by Zachary Chen</p>
                <p className="pointItem">Student Number: 500833799</p>
                <p className="pointItem">Email: zachary.chen@ryerson.ca</p>
            </div>
            <br/>
            <hr/>
            <br/>
            <h2>References</h2>
            <div className="point">
                <p className="pointItem"><a className="refLink" href="https://www.freecodecamp.org/news/how-to-create-a-react-app-with-a-node-backend-the-complete-guide/">Freecodecamp.org - How to Create a React App with Node Backend</a></p>
                <p className="pointItem"><a className="refLink" href="https://www.youtube.com/watch?v=w7ejDZ8SWv8">React JS Crash Course 2021</a></p>
                <p className="pointItem"><a className="refLink" href="https://www.youtube.com/watch?v=fL8cFqhTHwA">React Navbar Tutorial - Beginner React JS Project</a></p>
                <p className="pointItem"><a className="refLink" href="https://codersblock.com/blog/creating-glow-effects-with-css/">Glow Effects with CSS</a></p>
                <p className="pointItem"><a className="refLink" href="https://www.geeksforgeeks.org/how-to-create-a-scroll-to-top-button-in-react-js/">Back to Top Button</a></p>
                <p className="pointItem"><a className="refLink" href="https://carbon.now.sh/">Creating beautiful code snippets</a></p>
            </div>
        </div>
    )
}

export default Page6
