import React from 'react';
import './skills.css';
const Skills=()=>{
    return(
       <section id='skills'>
       <span className="skillTitle">What I do</span>
       <span className="skilldesc">I practice lots of computer language in my leisure time.</span>
       <div className="skillbars">
        <div className="skillBar">
            <div className="skillBarText">
                <h2>Interest</h2>
                <p>I am interested in developing websites</p>
            </div>
        </div>
        <div className="skillBar">
            <div className="skillBarText">
                <h2>Work</h2>
                <p>I work at tim Hortons</p>
            </div>
        </div>
        <div className="skillBar">
            <div className="skillBarText">
                <h2>Hobbies</h2>
                <p>I like to watch movies,read books </p>
            </div>
        </div>
        
        

       </div>

       </section>
       );
    
}
export default Skills