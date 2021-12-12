import React from 'react'; //optional
//import '../style/Skills.css';

const skillsLabel = "Skills";
const skills = ["Java", "Photoshop", "Illustrator", "Python"];
function Skills() {
    return (
     <div>
        <h2><span className="content-bold">{skillsLabel}</span></h2>
        <ol>
            {skills.map(skills => (
                <li key={skills}>{skills}</li>
            ))}
        </ol>
     </div>     
    );
}

export default Skills;