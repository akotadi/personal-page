import React, { Component } from 'react';

export default class CardHeader extends Component {
    constructor(props) {
        super(props);

        this.state = {
            image: props.image,
            section: props.section,
            onClickCardHeader: props.onClickCardHeader,
        }
    }

    render() {
        const { image, section, onClickCardHeader } = this.state;

        var style = {
            backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.1)), url(' + image + ')',
        };

        return (
            <header style={style} id={image} className="card-header" onClick={() => (onClickCardHeader())}>
                <h4>{section}</h4>
            </header>
        )
    }
}