import React from 'react';
import './intro.css';
import bg from '../../assets/abc.jpeg';
const Intro=()=>{
    return(
        <section id="intro">
            <div className="introContent">
        <span className="Hey">HEY!,</span>
        <span className="introText">I am <span className="introName">Rutvi Patel</span> <br/> Computer Programmer</span>
        <p className="introPara">I know many computer languages like javascript framewroks, C++, mainframe environment, swift..`</p>

            </div>
            <img src={bg} alt="Profile" className="bg"/>
            </section>
    )
}
export default Intro