import React from 'react';
import './navbar.css';
import logo from '../../assets/download.png';
import contactImg from '../../assets/contact.webp';
import  {Link} from 'react-scroll';

const NavBar=()=> {
    return (
        <nav className="navbar">
            <img src={logo} alt="logo" className='logo'/>
            <div className="desktopMenu">
              <Link  activeClass ='active' to='intro' spy ={true} smooth={true} offset={-100} duration={500}className="desktopMenuListItem">Home</Link>
              <Link  activeClass ='active' to='skills' spy ={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">About Me</Link>
              <Link  activeClass ='active' to='works' spy ={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Projects</Link>
              <Link  activeClass ='active' to='project' spy ={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">PortFolio</Link>
              
                </div>
       <button className="desktopMenuBtn" onClick={()=>{
        document.getElementById('contact').scrollIntoView({behavior:'smooth'});
       }
    
    }>
        <img src={contactImg} alt="" className="desktopMenuImg"/>Contact Me</button>

       
        </nav>
    )

}
export default NavBar