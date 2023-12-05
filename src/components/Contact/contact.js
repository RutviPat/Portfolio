import React from 'react'
const contact =()=>{
    return(
        <section id="contactPage">
            <div id="projects">
                <h1 className="contactPageTitle">My Projects</h1>
                <p className="projDesc">
                    I have created 3 to 4 websites
                </p>

            </div>
            <div id="contact">
                <h1 className="contactPageTitle">Contact Me</h1>
                <span className="contactDesc">Please fill out the form below to discuss any work oppurtunities</span>
                <form className='contactForm'>
                    <input type="text" className="name" placeholder='Your Name'/>
                    <input type="email" className="email" placeholder='Your Email '/>
                    <textarea name="message" rows="5" placeholder='Your Message'></textarea>
              <button type='submit' value='Send' className="submitBtn"></button>
                </form>
            </div>
        </section>
    );
}
export default contact