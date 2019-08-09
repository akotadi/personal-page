import React, { Component } from 'react';

export class AppFooter extends Component {

    render() {
        return  (
            <div className="layout-footer">
                <div className="footer-container">
                    <span className="footer-text">© 2019 Copyright: {"\t"}</span>
                    <a className="footer-link" target="_blank" rel="noopener noreferrer" href="https://github.com/akotadi">
                        <img className="footer-img" src="assets/layout/images/logoAkotadi.svg" alt="" width="25" />    
                        <span className="footer-text-bold"> Akotadi</span>
                    </a>
                </div>
            </div>
        );
    }
};