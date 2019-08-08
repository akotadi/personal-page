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
} from '@fortawesome/free-brands-svg-icons';

import './../layout/_glitchEffect.scss';
import './../layout/_imageRevealing.scss';
import './../layout/_galleryMain.scss';

const lifeImages = [
    { src: './assets/content/images/life/1.jpg', width: 97.32, height: 130 },
    { src: './assets/content/images/life/3.gif', width: 110, height: 82.61 },
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
        }
    }

    onHeaderTyped = () => {
        this.setState({ renderMsg: true });
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
                                            {' looking to improve.'}
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
                                        My name is Manuel Calva, currently studying the seventh semester in Computer Systems at ESCOM-IPN in Mexico.
                                        Of course, I am Mexican with 24 years old, do not ask how I have survived so much.
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
                </div>
            </div>
        );
    }
}