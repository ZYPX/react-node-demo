import React from 'react';
import './pages.css';
const Page5 = () => {
    return (
        <div className="container">
            <h2>Rating React.js and Node.js</h2>
            <br/>
            <br/>
            <hr/>
            <br/>
            <br/>
            <h2>React.js for Frontend Development</h2>
            <br/>
            <br/>
            <div className="point">
                <p className="pointItem">
                    I really enjoyed learning how to create responsive webpages with React. Prior to this assignment and this course, my experience with
                    frontend was limited to vanilla JavaScript, Jquery, HTML, and CSS. These fundamental frameworks laid the foundations for me to pickup
                    other frameworks such as React very quickly. The main benefit that I've felt using React is that the development time increases logarithmically
                    because once you create your main components that are used on most pages, you never have to touch them again and can easily add 2 lines of code to
                    add it to another page (importing and inserting into the return). The syntax is a bit wonky at first but after 1-2 pages, it becomes fairly 
                    straight forward. There were also plenty of resources online that I could refer to making the installation and learning process very simple. 
                    I am happy that I went with React for my frontend framework because I feel like learning it puts me up to speed with what the rest
                    of the industry is using for their stack. In retrospect, given more time, I would probably work to clean up some of the styling and class names
                    because I am by no means a graphic designer and I had to do a lot of hacking to get certain elements to look attractive.
                </p>
            </div>
            <br/>
            <br/>
            <hr/>
            <br/>
            <br/>
            <h2>Node.js for Backend Development</h2>
            <br/>
            <br/>
            <div className="point">
                <p className="pointItem">
                    I chose Node.js because it is a framework that I am very comfortable with. I was inspired to make a store catalogue for my demo because I
                    have worked on product monitors/scrapers many times before. The difference this time was that I had to connect the backend to a webpage and
                    display the results which, before this assignment, I had been using discord webhook embeds to relay the same information. Node.js is not that far
                    off from vanilla JavaScript apart from the vast library of extensions such as "got" and "express" which makes it very easy for any novice developer
                    to pickup and also allows for more advanced applications. I am happy that I chose node not only because of my familiarity with it but also, 
                    it is a core part of a lot of industry stacks making it a very important framework to know.
                </p>
            </div>
        </div>
    )
}

export default Page5
