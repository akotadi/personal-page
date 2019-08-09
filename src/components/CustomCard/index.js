import React, { Component } from 'react';
import './styles.scss';

import CardFooter from './CardFooter';
import CardBody from './CardBody';
import CardHeader from './CardHeader';

export default class CustomCard extends Component {
    constructor(props){
        super(props);

        this.state = {
            project: props.project,
            onClickCard: props.onClickCard,
        }
    }

    handleClickCardHeader = () => {
        const target = this.state.project.title.trim().replace(/\s+/g, '-').toLowerCase();
        this.state.onClickCard(target);
    }

    render() {
        const { project } = this.state;

        return (
            <div className="custom-card">
                <CardHeader image={project.thumbnail} section={project.section} onClickCardHeader={this.handleClickCardHeader} />
                <CardBody title={project.title} text={project.description} date={project.date} />
                <CardFooter link={project.repository} />
            </div>
        )
    }
}