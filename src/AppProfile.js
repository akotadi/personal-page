import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faGithub,
    faFacebook,
    faTwitter,
    faLinkedin,
    faTelegramPlane,
} from '@fortawesome/free-brands-svg-icons';
import { 
    faComment,
    faEnvelope,
    faFilePdf,
} from '@fortawesome/free-solid-svg-icons';

import classNames from 'classnames';

export class AppProfile extends Component {

    constructor() {
        super();

        this.state = {
            expanded: false,
        };
        
        this.onClick = this.onClick.bind(this);
    }

    onClick(event) {
        this.setState({expanded: !this.state.expanded});
        event.preventDefault();
    }

    render() {
        return  (
            <div className="layout-profile">
                <div className="thumbnail">
                    <img className="portrait" src="./assets/layout/images/profile.jpg" alt="" />
                </div>
                <button className="p-link layout-profile-link" onClick={this.onClick}>
                    <span className="username">Manuel Calva</span><span>     </span>
                    <FontAwesomeIcon icon={faComment} />
                </button>
                <ul className={classNames({'layout-profile-expanded': this.state.expanded})}>
                    <li>
                        <div className="p-grid">
                            <div className="p-col">
                                <button className="p-link">
                                    <span>
                                        Social Media:
                                    </span>
                                </button>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="p-grid">
                            <div className="p-col">
                                <a className="p-link" target="_blank" rel="noopener noreferrer" href="https://github.com/akotadi">
                                    <FontAwesomeIcon color="FireBrick" size="lg" icon={faGithub} />
                                </a>
                            </div>
                            <div className="p-col">
                                <a className="p-link" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/jmch7795">
                                    <FontAwesomeIcon color="FireBrick" size="lg" icon={faLinkedin} />
                                </a>
                            </div>
                            <div className="p-col">
                                <a className="p-link" target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/jmch.7795">
                                    <FontAwesomeIcon color="FireBrick" size="lg" icon={faFacebook} />
                                </a>
                            </div>
                            <div className="p-col">
                                <a className="p-link" target="_blank" rel="noopener noreferrer" href="https://twitter.com/akotadi">
                                    <FontAwesomeIcon color="FireBrick" size="lg" icon={faTwitter} />
                                </a>
                            </div>
                            <div className="p-col">
                                <a className="p-link" target="_blank" rel="noopener noreferrer" href="https://t.me/Akotadi">
                                    <FontAwesomeIcon color="FireBrick" size="lg" icon={faTelegramPlane} />
                                </a>
                            </div>
                        </div>                    
                    </li>
                    <li>
                        <button className="p-link">
                            <div className="p-grid">
                                <div className="p-col-12 p-md-2">
                                    <FontAwesomeIcon icon={faEnvelope} />
                                </div>
                                <div className="p-col-12 p-md-10 p-justify-center">
                                    <span>calvam@acm.org</span>
                                </div>
                            </div>
                        </button>
                    </li>
                </ul>
                <br></br>
                <a className="p-link layout-profile-link p-align-center p-justify-center" target="_blank" rel="noopener noreferrer" href="./ResumeUS.pdf">
                    <div className="p-grid">
                        <div className="p-col-12 p-md-2">
                            <FontAwesomeIcon icon={faFilePdf} />
                        </div>
                        <div className="p-col-12 p-md-10 p-justify-center">
                            <span>Resume</span>
                        </div>
                    </div>
                </a>
            </div>
        );
    }
}