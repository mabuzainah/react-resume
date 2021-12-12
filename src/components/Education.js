import React from 'react'; //optional

const eductionLabel = "Education";
const paragraphFiller = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

function Education() {
    return (
     <div>
        <h2><span className="content-bold">{eductionLabel}</span></h2>
        
        <ul>
            <li>
                <div className="education-title">Front-End Dev w/React - Lighthouse Labs</div>
                <div className="date">2021
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                </div>
            </li>
            <li>
                <div className="education-title">Computer Science - University of Ottawa</div>
                <div className="date">2014- 2019
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                </div>
            </li>
            
        </ul>
     </div>     
    );
}

export default Education;