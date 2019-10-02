import React, { Component } from 'react';

import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { InputText } from "primereact/inputtext";

import Typist from 'react-typist';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faGithub,
    faFacebook,
    faTwitter,
    faLinkedin,
    faTelegramPlane,
    faWindows,
    faLinux,
    faHtml5,
    faCss3Alt,
    faGitAlt,
    faNode,
    faReact,
} from '@fortawesome/free-brands-svg-icons';

import './../layout/_imageRevealing.scss';
import './../layout/_galleryMain.scss';
import './../layout/_circleContainer.scss';
import './../layout/_linearContainer.scss';

const lifeImages = [
    { src: './assets/content/images/life/1.jpg', width: 97.32, height: 130 },
    /* { src: './assets/content/images/life/3.gif', width: 110, height: 82.61 }, */
    { src: './assets/content/images/life/2.jpg', width: 86.09, height: 115 },
    { src: './assets/content/images/life/4.jpg', width: 120, height: 90 },
    { src: './assets/content/images/life/5.jpg', width: 82.67, height: 110 },
    { src: './assets/content/images/life/6.jpg', width: 130, height: 97.5 },
    { src: './assets/content/images/life/7.jpg', width: 74.9, height: 100 },
    { src: './assets/content/images/life/8.jpg', width: 120, height: 90 },
    { src: './assets/content/images/life/9.jpg', width: 100, height: 88.6 },
];

export class HomePage extends Component {

    constructor(props){
        super(props);

        this.state = {
            renderMsg: false,
            isHoveringLanguage: false,
            languageTime: '0 years',
            isHoveringRdbms: false,
            rdbmsTime: '0 years',
            isHoveringIdioms: false,
            idiomsLevel: 'fluent',
        }
    }

    onHeaderTyped = () => {
        this.setState({ renderMsg: true });
    }

    handleMouseHover = (type = 0, time = 0) => {
        switch (type) {
            case 0:
                this.setState({ isHoveringLanguage: true, languageTime: `${time} year(s)` });
                break;
            case 1:
                this.setState({ isHoveringRdbms: true, rdbmsTime: `${time} year(s)` });
                break;
            case 2:
                this.setState({ isHoveringIdioms: true, idiomsLevel: `${time}` });
                break;

            default:
                break;
        }
        console.log(this.state);
    }

    handleMouseHoverLeave = (type = 0) => {
        switch (type) {
            case 0:
                this.setState({ isHoveringLanguage: false});
                break;
            case 1:
                this.setState({ isHoveringRdbms: false });
                break;
            case 2:
                this.setState({ isHoveringIdioms: false });
                break;

            default:
                break;
        }
        console.log(this.state);
    }

    render() {
        return (
            <div className="home-content">
                <Card className="home-section introduction">
                    <div className="p-grid p-justify-center">
                        <div className="p-col-12 p-lg-3">
                            <div className="reveal-container">
                                <div className="container">
                                    <div className="thumbex">
                                        <div className="thumbnail">
                                            <img src="./assets/content/images/life/mainImage.jpeg" alt="" />
                                            <span>
                                                Manuel Calva
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="p-col-12 p-lg-6 p-lg-offset-2">
                            <div className="introduction-container">
                                <Typist
                                    className="introduction-header"
                                    avgTypingDelay={40}
                                    startDelay={2000}
                                    onTypingDone={this.onHeaderTyped}
                                    cursor={{ hideWhenDone: true }}
                                >
                                    Student of Computer Systems in ESCOM-IPN and Data Science enthusiast.
                                </Typist>
                                {this.state.renderMsg ? (
                                    <React.Fragment>
                                        <hr />
                                        <Typist
                                            className="introduction-message"
                                        >
                                            <Typist.Delay ms={1000} />
                                            At the moment, programmer
                                        <Typist.Backspace count={10} delay={1000} />
                                            <Typist.Delay ms={750} />
                                            dummy programmer
                                        <Typist.Delay ms={250} />
                                            {' looking to improve in React.'}
                                        </Typist>
                                    </React.Fragment>
                                ) : null}
                            </div>
                            <div className="contact-container">
                                <div className="p-grid p-justify-center">
                                    <div className="p-col">
                                        <a className="contact-icon" target="_blank" rel="noopener noreferrer" href="https://github.com/akotadi">
                                            <FontAwesomeIcon color="Black" size="2x" icon={faGithub} />
                                        </a>
                                    </div>
                                    <div className="p-col">
                                        <a className="contact-icon" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/jmch7795">
                                            <FontAwesomeIcon color="Black" size="2x" icon={faLinkedin} />
                                        </a>
                                    </div>
                                    <div className="p-col">
                                        <a className="contact-icon" target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/jmch.7795">
                                            <FontAwesomeIcon color="Black" size="2x" icon={faFacebook} />
                                        </a>
                                    </div>
                                    <div className="p-col">
                                        <a className="contact-icon" target="_blank" rel="noopener noreferrer" href="https://twitter.com/akotadi">
                                            <FontAwesomeIcon color="Black" size="2x" icon={faTwitter} />
                                        </a>
                                    </div>
                                    <div className="p-col">
                                        <a className="contact-icon" target="_blank" rel="noopener noreferrer" href="https://t.me/Akotadi">
                                            <FontAwesomeIcon color="Black" size="2x" icon={faTelegramPlane} />
                                        </a>
                                    </div>
                                </div>
                                <div className="p-grid p-justify-center">
                                    <div className="p-col-12 p-md-3">
                                        <div className="p-inputgroup" style={{ margin: '10px auto', alignItems: 'center', justifyContent: 'center' }}>
                                            <span className="p-inputgroup-addon" style={{ opacity: 0.6 }}>
                                                <i className="pi pi-envelope"></i>
                                            </span>
                                            <InputText value="calvam@acm.org" disabled={true} />
                                        </div>
                                    </div>
                                    <div className="p-col-12 p-md-6 p-md-offset-1">
                                        <a target="_blank" rel="noopener noreferrer" href="./ResumeUS.pdf">
                                            <Button label="Check my Resume!" className="p-button-raised p-button-secondary contact-file" icon="pi pi-file-pdf" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Card>

                <div className="home-section implementation">
                    <div className="p-grid">
                        <div className="p-col-12 p-lg-5">
                            <div style={{ height: '100%', display: 'flex', alignItems: 'center'}}>
                                <div className="home-text">
                                    <p>
                                        Oh! Looks like you are in my humble Kingdom.
                                        This page is, probably, not the most beautiful way to share who I am to the world.
                                        But, if you are here, is because something call your attetion from me. And because of that, I will introduce myself:
                                    </p>
                                    <p style={{ width: '90%', margin: '0 auto' }}>
                                        My name is Manuel Calva, also known as "Akotadi" as my nickname in someplaces.
                                        As probably you can see, I am Mexican with 24 years old, do not ask how I have survived so much. 
                                        And I do my best to express myself in English but languages are not my forte.
                                    </p>
                                    <p style={{ width: '90%', margin: '10px auto' }}>
                                        Currently, I am studying the seventh semester in Computer Systems at ESCOM-IPN in Mexico with a GPA of 93/100 and I expect to be graduated at June 2021.
                                        Also, I attend to the ACM Student Chapter (also known as “Club de Algoritmia” in my school) because I am interested in competitive programming.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="p-col-11 p-lg-6 p-lg-offset-1">
                            <div className="gallery">
                                {lifeImages.map(image => {
                                    return (
                                        <ul style={{ width: `${image.width}px`, height: `${image.height}px` }} key={image.src}>
                                            <li style={{backgroundImage: `url(${image.src})`}}>A</li>
                                            <li style={{backgroundImage: `url(${image.src})`}}>B</li>
                                            <li style={{backgroundImage: `url(${image.src})`}}>C</li>
                                            <li style={{backgroundImage: `url(${image.src})`}}>D</li>
                                            <li style={{backgroundImage: `url(${image.src})`}}>E</li>
                                            <li style={{backgroundImage: `url(${image.src})`}}>6</li>
                                            <li style={{backgroundImage: `url(${image.src})`}}>7</li>
                                            <li style={{backgroundImage: `url(${image.src})`}}>8</li>
                                            <li style={{backgroundImage: `url(${image.src})`}}>9</li>
                                        </ul>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="p-grid p-justify-center">
                        <div className="p-col-10">
                            <div style={{ height: '100%', display: 'flex', alignItems: 'center' }}>
                                <div className="home-text">
                                    <p>
                                        In this page you can see a few images of myself and my life.
                                        Also, you can find a few proofs of my trajectory as a student and developer in the another pages, I hope you enjoy knowing me.
                                        Unfortunately, I do not have any working experience yet, but I expect include some of that soon.
                                    </p>
                                    <p>
                                        Fortunately, I have many <span style={{ fontWeight: 'bold' }}>skills</span> that I have developed in this time:
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="p-grid p-justify-center">
                        <div className="p-col-10 p-lg-3">
                            <h4>PROGRAMMING LANGUAGES</h4>
                            <ul className='circle-container circle-container-language'>
                                <li
                                    onMouseEnter={this.handleMouseHover.bind(this, 0, 2.5)}
                                    onMouseLeave={this.handleMouseHoverLeave.bind(this, 0)}
                                >
                                    <i className="icon-c" />
                                </li>
                                <li
                                    onMouseEnter={this.handleMouseHover.bind(this, 0, 2.5)}
                                    onMouseLeave={this.handleMouseHoverLeave.bind(this, 0)}
                                >
                                    <i className="icon-cplusplus" />
                                </li>
                                <li
                                    onMouseEnter={this.handleMouseHover.bind(this, 0, 1.5)}
                                    onMouseLeave={this.handleMouseHoverLeave.bind(this, 0)}
                                >
                                    <i className="icon-java" />
                                </li>
                                <li
                                    onMouseEnter={this.handleMouseHover.bind(this, 0, 1.5)}
                                    onMouseLeave={this.handleMouseHoverLeave.bind(this, 0)}
                                >
                                    <i className="icon-javascript" />
                                </li>
                                <li
                                    onMouseEnter={this.handleMouseHover.bind(this, 0, 0.5)}
                                    onMouseLeave={this.handleMouseHoverLeave.bind(this, 0)}
                                >
                                    <i className="icon-php" />
                                </li>
                                <li
                                    onMouseEnter={this.handleMouseHover.bind(this, 0, 0.5)}
                                    onMouseLeave={this.handleMouseHoverLeave.bind(this, 0)}
                                >
                                    <i className="icon-python" />
                                </li>
                                <li>
                                    {
                                        this.state.isHoveringLanguage &&
                                        <div className="circle-container-text">
                                            {this.state.languageTime}
                                        </div>
                                    }
                                </li>
                            </ul>
                        </div>
                        <div className="p-col-10 p-lg-3 p-lg-offset-1">
                            <h4>RDBMS</h4>
                            <ul className='circle-container circle-container-rdbms'>
                                <li
                                    onMouseEnter={this.handleMouseHover.bind(this, 1, 1.5)}
                                    onMouseLeave={this.handleMouseHoverLeave.bind(this, 1)}
                                >
                                    <i className="icon-mysql" />
                                </li>
                                <li
                                    onMouseEnter={this.handleMouseHover.bind(this, 1, 1.5)}
                                    onMouseLeave={this.handleMouseHoverLeave.bind(this, 1)}
                                >
                                    <i className="icon-mariadb" />
                                </li>
                                <li
                                    onMouseEnter={this.handleMouseHover.bind(this, 1, 0.5)}
                                    onMouseLeave={this.handleMouseHoverLeave.bind(this, 1)}
                                >
                                    <i className="icon-postgres" />
                                </li>
                                <li
                                    onMouseEnter={this.handleMouseHover.bind(this, 1, 0.3)}
                                    onMouseLeave={this.handleMouseHoverLeave.bind(this, 1)}
                                >
                                    <i className="icon-mongodb" />
                                </li>
                                <li>
                                    {
                                        this.state.isHoveringRdbms &&
                                        <div className="circle-container-text">
                                            {this.state.rdbmsTime}
                                        </div>
                                    }
                                </li>
                            </ul>
                        </div>
                        <div className="p-col-10 p-lg-3 p-lg-offset-1">
                            <h4>Idioms</h4>
                            <ul className='circle-container circle-container-idioms'>
                                <li
                                    onMouseEnter={this.handleMouseHover.bind(this, 2, 'Native')}
                                    onMouseLeave={this.handleMouseHoverLeave.bind(this, 2)}
                                >
                                    <img src='http://icons.iconarchive.com/icons/custom-icon-design/2014-world-cup-flags/48/Mexico-icon.png' alt="..." />
                                </li>
                                <li
                                    onMouseEnter={this.handleMouseHover.bind(this, 2, 'Fluent')}
                                    onMouseLeave={this.handleMouseHoverLeave.bind(this, 2)}
                                >
                                    <img src='http://icons.iconarchive.com/icons/custom-icon-design/2014-world-cup-flags/48/USA-icon.png' alt="..." />
                                </li>
                                <li
                                    onMouseEnter={this.handleMouseHover.bind(this, 2, 'Basic')}
                                    onMouseLeave={this.handleMouseHoverLeave.bind(this, 2)}
                                >
                                    <img src='http://icons.iconarchive.com/icons/custom-icon-design/2014-world-cup-flags/48/Italy-icon.png' alt="..." />
                                </li>
                                <li>
                                    {
                                        this.state.isHoveringIdioms &&
                                        <div className="circle-container-text">
                                            {this.state.idiomsLevel}
                                        </div>
                                    }
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="p-grid p-justify-center">
                        <div className="p-col-10 p-lg-2">
                            <h4>PLATFORMS</h4>
                            <ul className='linear-container linear-container-platforms'>
                                <li><FontAwesomeIcon color="Black" size="2x" icon={faWindows} /></li>
                                <li><FontAwesomeIcon color="Black" size="2x" icon={faLinux} /></li>
                            </ul>
                        </div>
                        <div className="p-col-10 p-lg-9 p-lg-offset-1">
                            <h4>TECHNOLOGIES</h4>
                            <ul className='linear-container linear-container-technologies'>
                                <li><FontAwesomeIcon color="Black" size="2x" icon={faHtml5} /></li>
                                <li><FontAwesomeIcon color="Black" size="2x" icon={faCss3Alt} /></li>
                                <li><FontAwesomeIcon color="Black" size="2x" icon={faGitAlt} /></li>
                                <li><img alt="" src="https://img.icons8.com/material-sharp/48/000000/console.png" /></li>
                                <li><i className="icon-jquery" /></li>
                                <li><img alt="" src="https://icon-library.net//images/ajax-icon/ajax-icon-7.jpg" /></li>
                                <li><i className="icon-spring" /></li>
                                <li><img alt="" src="https://www.sushovan.de/design/icons/tex.ico" /></li>
                                <li><FontAwesomeIcon color="Black" size="2x" icon={faNode} /></li>
                                <li><img alt="" src="https://i.ibb.co/Hh76Xkb/Pngtree-socket-io-1348233.png" /></li>
                                <li><img alt="" src="https://raw.githubusercontent.com/remojansen/logo.ts/master/ts.png" /></li>
                                <li><FontAwesomeIcon color="Black" size="2x" icon={faReact} /></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <br />
            </div>
        );
    }
}