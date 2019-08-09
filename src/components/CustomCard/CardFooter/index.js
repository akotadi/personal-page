import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

class Button extends Component {
    constructor(props) {
        super(props);

        this.state = {
            link: props.link,
        }
    }

    render() {
        const { link } = this.state;

        return (
            <a className="button button-primary" target="_blank" rel="noopener noreferrer" href={link}>
                <FontAwesomeIcon icon={faChevronRight} /> Find out more
            </a>
        )
    }
}

export default class CardFooter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            link: props.link,
        }
    }

    render() {
        const { link } = this.state;

        return (
            <div className="card-footer">
                <Button link={link} />
            </div>
        )
    }
}