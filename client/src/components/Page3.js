import React from 'react';
import './pages.css';
import componentExample from '../assets/componentExample.png';
import formExample from '../assets/formExample.png';
import productExample from '../assets/productExample.png';
import cssExample from '../assets/cssExample.png';
import resultExample from '../assets/resultExample.png';

const Page3 = () => {
    return (
        <div className="container">
            <h2>How to Make and Style a Responsive Webpage</h2>
            <br/>
            <br/>
            <hr/>
            <br/>
            <br/>
            <h2>Part 1: Basic Components</h2>
            <br/>
            <br/>
            <div className="point">
                <p className="pointItem">
                    React uses components in order to reuse aspects of your user interface without having to copy the entire block of code. Below is the basic boilerplate for
                    a function based React component.
                </p>
                <img className="pointItem bodyImage" src={componentExample} alt="Example of a component" />
            </div>
            <br/>
            <br/>
            <h2>Part 2: Handling user input</h2>
            <br/>
            <br/>
            <div className="point">
                <p className="pointItem">
                    For this example, we will be creating a form that contains a select element and when the user submits, it will make an api call to the backend and populate
                    the page with new content.
                </p>
                <img className="pointItem bodyImage" src={formExample} alt="Example of a form" />
            </div>
            <br/>
            <br/>
            <h2>Part 3: Styling</h2>
            <br/>
            <br/>
            <div className="point">
                <p className="pointItem">
                    React uses standard CSS for styling. For this example, we will be styling the Product component, taking into account mobile and desktop sized screens.
                </p>
                <p className="pointItem">
                    The JavaScript:
                </p>
                <img className="pointItem bodyImage" src={productExample} alt="Example of a Product" />
                <p className="pointItem">
                    The CSS:
                </p>
                <img className="pointItem bodyImage" src={cssExample} alt="Example of CSS" />
                <p className="pointItem">
                    The final result:
                </p>
                <img className="pointItem bodyImage" src={resultExample} alt="Example of result" />
            </div>
        </div>
    )
}

export default Page3
