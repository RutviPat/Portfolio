import React from 'react';
import './works.css';
import portfolio1 from '../../assets/images1.png';
import portfolio2 from '../../assets/image2.jpeg';
import portfolio3 from '../../assets/download.jpeg';

const Works=() =>{
    return(
       <section id='works'>
        <h2 className="workstitle">My PortFolio</h2>
        <span className="workdesc">I like to follow my daily routine</span>
        <div className="worksimgs">
            <img src={portfolio1} alt="" className="worksimg"/>
            <img src={portfolio2} alt="" className="worksimg"/>
            <img src={portfolio3} alt="" className="worksimg"/>
            

        </div>
       </section>
    );
}
export default Works