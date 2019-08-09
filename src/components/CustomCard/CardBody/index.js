import React, { Component } from 'react';

export default class CardBody extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: props.title,
            description: props.text,
            date: props.date,
        }
    }

    render() {
        const { title, description, date } = this.state;

        return (
            <div className="card-body">
                <p className="date">{date}</p>

                <h2>{title}</h2>

                <p className="content">{description}</p>

            </div>
        )
    }
}