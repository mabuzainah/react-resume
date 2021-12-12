import React from 'react'; //optional
import Education from './Education';
import Experience from './Experience';
import Skills from './Skills';


function Summary() {
    return (
        <div className="App-contentcontainer">
            <Skills />
            <br/>
            <Experience />
            <br/>
            <Education />
        </div>
    );
}

export default Summary;