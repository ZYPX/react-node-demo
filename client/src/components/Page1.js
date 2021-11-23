import React from 'react';
import './pages.css';
import reactThumb from '../assets/reactjs-thumb.jpg';
import graph from '../assets/popularity.jpg';
import ig from '../assets/instagram.png';
import nodePic from '../assets/nodejs.jpg';
import graph2 from '../assets/nodejspop.png';
import graph3 from '../assets/expresspop.png';
import netflix from '../assets/netflix.png';

const Page1 = () => {
    return (
        <div className="container">
            <img src={reactThumb} alt="react logo"/>
            <br/>
            <br/>
            <h2>What is React?</h2>
            <div className="info">
                <div className="bodyText">
                    <p>
                        React is a free and open-source JavaScript library for building user interfaces.
                        It was created by Facebook (now renamed to Meta) in May of 2013 and uses declarative, 
                        component-based approach to easily create and reuse html code.
                    </p>
                </div>
                <br/>
                <br/>
                <img className="bodyImage" src={graph} alt="popularity graph"/>
                <br/>
                <br/>
                <div className="bodyText">
                <p>
                    As seen in the graph above, React is one of (if not) the most popular front-end
                    frameworks. This is because it is easy to learn and use and is documented well.
                </p>
                </div>
            </div>
            <br/>
            <br/>
            <h2>Strengths</h2>
            <div className="info">
                <ul className="pageUL">
                    <li className="pageLI">Uses JSX - A syntax extension of JavaScript which only has small syntactic differences</li>
                    <li className="pageLI">Easily create dynamic web applications with use of various hooks</li>
                    <li className="pageLI">Component based design allows for precise control over individual pieces of an app so that they can be easily maintained, reused, or modified without having to change other components</li>
                    <li className="pageLI">React Virtual DOM eliminates the degraded performance involved with updating the browser's DOM directly</li>
                    <li className="pageLI">Widely used and has cross-platform support</li>
                </ul>
                
            </div>
            <br/>
            <br/>
            <h2>Weaknesses</h2>
            <div className="info">
                <ul className="pageUL">
                    <li className="pageLI">Constant updates and changes to the React framework means developers have to relearn and keep up</li>
                    <li className="pageLI">Poor documentation - as a result of the constant changes made to the framework</li>
                    <li className="pageLI">Incompleteness - React only provides the View part of the MVC model so developers have to use other frameworks along with React</li>
                </ul>
                
            </div>
            <br/>
            <br/>
            <h2>Who uses it?</h2>
            <div className="info">
                <div className="bodyText">
                    <p>
                        React is used by developers who need to save time and push builds into production quickly. The
                        app must also be very performant with zero issues handling many media elements on screen at the same time.
                        Cross-platform support makes it ideal for websites, desktop applications, mobile applications,
                        and pretty much anything that requires a user interface. Some examples of React applications are
                        Facebook, Instagram, Twitter, and Netflix. React is the goto framework for creating dynamic content.
                    </p>
                </div>
                <br/>
                <br/>
                <img className="bodyImage" src={ig} alt="instagram"/>
            </div>
            <br/>
            <hr/>
            <br/>
            <img src={nodePic} alt="Node.js + Express.js"/>
            <br/>
            <br/>
            <h2>What are Node.js and Express.js?</h2>
            <div className="info">
                <div className="bodyText">
                    <p>
                        Node.js is a JavaScript runtime built on Google Chrome's V8 JavaScript engine. It is open source, cross-platform compatible, and allows for the execution of
                        JavaScript code outside of the browser. It is a single threaded, event-driven language that produces asynchronous code which optimizes throughput and scalability
                        of web applications. Express.js is an application framework for Node.js designed for building web applications and APIs. It serves as the standard server framework
                        for Node.js.
                    </p>
                </div>
                <br/>
                <br/>
                <img className="bodyImage" src={graph2} alt="popularity graph javascript"/>
                <br/>
                <img className="bodyImage" src={graph3} alt="popularity graph express"/>
                <br/>
                <br/>
                <div className="bodyText">
                <p>
                    Javascript is the most popular language for web development due to it being the language that powers modern day browsers such as Google Chrome and Firefox.
                    Consequently, this means that Node.js has propelled to the top compared to other server-side programming languages because it allows for a single language (JavaScript)
                    to be used for both server-side and client-side scripting allowing developers to focus on a singular language when developing web apps. This is known as teh JavaScript
                    everywhere paradigm. According to the graph above, Express.js is the fourth most popular backend framework.
                </p>
                </div>
            </div>
            <br/>
            <br/>
            <h2>Strengths</h2>
            <div className="info">
                <ul className="pageUL">
                    <li className="pageLI">Easy Scalability</li>
                    <li className="pageLI">Easy to learn</li>
                    <li className="pageLI">High I/O throughput</li>
                    <li className="pageLI">Large community with extensive documentation</li>
                    <li className="pageLI">Abundant number of open source packages that increase productivity and streamlines the development process</li>
                </ul>
                
            </div>
            <br/>
            <br/>
            <h2>Weaknesses</h2>
            <div className="info">
                <ul className="pageUL">
                    <li className="pageLI">Poor performance for CPU heavy tasks</li>
                    <li className="pageLI">Asynchronous nature means a lot of nested call backs and overall messier code</li>
                    <li className="pageLI">Although the npm library has a lot of packages, a lot of them do not have proper documentation and are poorly built</li>
                </ul>
                
            </div>
            <br/>
            <br/>
            <h2>Who uses it?</h2>
            <div className="info">
                <div className="bodyText">
                    <p>
                        Node.js and Express.js are used by developers who want highly performant, highly scalable APIs and web applications.
                        Applications written in Node.js load faster, respond faster, and can be built faster which cuts down on development time.
                        It is ideal for sites that offer audio/video streaming, browser games, and social media platforms. Some examples of sites/companies
                        that use Node.js for their web apps include Netflix, PayPal, Linkedin, and Uber.
                    </p>
                </div>
                <br/>
                <br/>
                <img className="bodyImage" src={netflix} alt="netflix"/>
                <br/>
                <br/>
            </div>
        </div>
    )
}

export default Page1
