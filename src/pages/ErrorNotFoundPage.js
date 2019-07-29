import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import { Button } from 'primereact/button';

import './../layout/_missing.scss';

export default class ErrorNotFoundPage extends Component {

    render() {
        return (
            <div className="custom-container">
                <div className="justify-content-center row">
                    <div className="col-md-6">
                        <div className="clearfix">
                            <h1 className="float-left display-3 mr-4">
                                404
                            </h1>
                            <h4 className="pt-3">
                                Oops! Looks like you're lost.
                            </h4>
                            <p className="text-muted float-left">
                                The page you are looking for was not found.
                            </p>
                        </div>
                        <div className="input-prepend input-group">
                            <div className="input-group-center">
                                <Link to="/">
                                    <Button label="Wanna go home?" className="p-button-rounded" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};