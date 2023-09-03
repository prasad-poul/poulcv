import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { ImEnvelop, ImPhone } from 'react-icons/im';
import Prasad from './prasad.jpg';



import './index.css';

const Portfolio = () => {
    return(
        <>

    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
            <a className="navbar-brand" href="#">Prasad Poul</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="#about">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#certification">Certification</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#portfolio">Portfolio</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#contact">Contact</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#pd">Personal Details</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    <header className="hero">
        <div className="container">
            <div className="hero-content">
                <h1 className="display-4">Hello, I'm Prasad Poul</h1>
                <p className="lead">Enthusiastic and dedicated Junior React.js Developer with a strong foundation in front-end development and a passion for creating seamless and visually appealing user experiences. Proficient in HTML, CSS, and JavaScript, with a focus on building responsive and interactive web applications. Eager to contribute to dynamic teams and continue learning and growing in a collaborative environment.<span className="typed-text"></span></p>
                <a href="#contact" className="btn btn-primary btn-lg">Contact Me</a>
            </div>
        </div>
    </header>
    <section id="about" className="py-5">
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <h2>About Me</h2>
                    <p>I'm Prasad Poul. I am from  Solapur, Maharashtra</p>
                    <p>I've total 1 year of work experience as React.js Developer</p>
                    <p>Enthusiastic and dedicated Junior React.js Developer with a strong foundation in front-end development and a passion for creating seamless and visually appealing user experiences. Proficient in HTML, CSS, and JavaScript, with a focus on building responsive and interactive web applications. Eager to contribute to dynamic teams and continue learning and growing in a collaborative environment.</p>
                </div>
                <div className="col-lg-6">
                    <h2>Skills</h2>
                    <ul>
                        <li>React.js</li>
                        <li>HTML & CSS </li>
                        <li>Javascript</li>
                        <li>Bootstrap</li>
                        <li>MySQL</li>
                        <li>Basics of php and GitHub</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <section id="certification" className="py-5">
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                <h2>Certificates:</h2>
                    <ul>
                        <li>Completed "HTML","CSS" and "Javascript" course" from w3school.com.</li> 
                        <li>Completed "Technical Support Fundamental " course provided by Google Coursera</li> 
                        <li>Completed "Technical English for Engineers" course provided by NPTEL.</li> 
                        <li>Completed "Career Edge - Knockdown the Lockdown" course provided by TCSiON.</li> 
                        <li>Completed "Software Testing" course from Besent Technologies Banglore. </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
 
    <section id="portfolio" className="bg-light py-5">
        <div className="container">
            <h2>Portfolio</h2>
            <div className="row">
                <div className="col-md-4">
                    <div className="card mb-4">
                        {/*<img src="project1.jpg" className="card-img-top" alt="Project 1" />*/}
                        <div className="card-body">
                            <h5 className="card-title">Project</h5>
                            <p className="card-text">NMD Interior</p>
                            <p>•	Cooperate with designers to create clean interfaces and simple, intuitive interactions and experiences.</p>
                            <p>   •	Develop project concepts and maintain optimal workflow.</p>
                            <p>  •	Work with senior developer to manage large, complex design projects for corporate clients.</p>
                            <p>  •	Complete detailed programming and development tasks for front end public and internal websites as well as challenging back-end server code.</p>
                            <p>   •	Develop reusable components.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="contact" className="py-5">
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                <h2>Contact Me</h2>
                <p><ImEnvelop /><span style={{margin:"0px 10px"}}><strong>prasadpoul555@gmail.com</strong></span>
                </p>
                <p><ImPhone /><span style={{margin:"0px 10px"}}><strong>+91 7821040055</strong></span>
                </p>
                </div> 
            </div>
        </div>
    </section>

    <section id="pd" className="py-5">
        <div className="container">
            <h2>Personal details</h2>
            <div className="row">
                <div className="col-lg-6" >
                        <ul  style={{listStyle:'none'}}> 
                            <li><strong>Name</strong>	        : Prasad Tanaji Poul</li>
                            <li><strong>Date of Birth</strong>	: 01 July 2000</li>
                            <li><strong>Nationality</strong>	: Indian</li>
                            <li><strong>Language Known</strong>	: English, Hindi & Marathi</li>
                            <li><strong>Address</strong>	    : A/P Kardehalli, South Solapur, Solapur, Maharashtra, 413006</li>
                            <li><strong>Hobbies</strong>        : Swimming, Playing cricket and Traveling</li>     
                        </ul> 
                </div>                 
                <div className="p-img">
                    <img src={Prasad} alt="prasad" />
                </div>
            </div>
        </div>
    </section>


    <footer className="bg-dark text-light py-4">
        <div className="container">
            <div className="text-center">
                &copy; 2023 Prasad Poul
            </div>
        </div>
    </footer>
    </>
    )
}

export default Portfolio;