import React, { Component, Suspense } from 'react';

import { Card } from 'primereact/card';

import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; 

const CustomCard = React.lazy(() => import('./../components/CustomCard'));

const projectsImagesPath = './assets/content/images/projects';

const projects = [
    {
        title: 'APMS',
        thumbnail: `${projectsImagesPath}/apms/thumbnail.jpg`,
        images: [
            `${projectsImagesPath}/apms/1.png`,
            `${projectsImagesPath}/apms/2.png`,
            `${projectsImagesPath}/apms/3.png`,
            `${projectsImagesPath}/apms/4.png`,
            `${projectsImagesPath}/apms/5.png`,
            `${projectsImagesPath}/apms/6.png`,
            `${projectsImagesPath}/apms/7.png`,
            `${projectsImagesPath}/apms/8.png`,
            `${projectsImagesPath}/apms/9.png`,
        ],
        date: 'Winter 2018',
        section: 'Scholar Project',
        description: 'Auxiliary system for the creation and management of the learning units at my university.',
        activies: [
            ''
        ],
        repository: 'https://github.com/SoftwareEngineerESCOM/APMS-Server',
        link: 'https://softwareengineerescom.gitlab.io/APMS/public/login',
        documentation: 'https://github.com/SoftwareEngineerESCOM/IngSof/blob/master/ManualTecnico/main.pdf',
        teammates: {
            searleser97: 'https://github.com/searleser97',
        },
    },
    {
        title: 'IPN-Awards',
        thumbnail: `${projectsImagesPath}/ipn-awards/thumbnail.jpg`,
        images: [
            `${projectsImagesPath}/ipn-awards/1.png`,
            `${projectsImagesPath}/ipn-awards/2.png`,
            `${projectsImagesPath}/ipn-awards/3.png`,
            `${projectsImagesPath}/ipn-awards/4.png`,
            `${projectsImagesPath}/ipn-awards/5.png`,
            `${projectsImagesPath}/ipn-awards/6.png`,
            `${projectsImagesPath}/ipn-awards/7.png`,
            `${projectsImagesPath}/ipn-awards/8.png`,
            `${projectsImagesPath}/ipn-awards/9.png`,
            `${projectsImagesPath}/ipn-awards/10.png`,
            `${projectsImagesPath}/ipn-awards/11.png`,
            `${projectsImagesPath}/ipn-awards/12.png`,
            `${projectsImagesPath}/ipn-awards/13.png`,
        ],
        date: 'Winter 2018',
        section: 'Scholar Project',
        description: 'System developed to manage the organization, execution and generate statistics of an award event for the IPN.',
        activies: [
            ''
        ],
        repository: 'https://github.com/akotadi/IPN-Awards',
        link: 'http://18.220.84.158/Front-End/',
        teammates: {
            luisca98PS: 'https://github.com/luisca98PS',
            Delciuxs: 'https://github.com/Delciuxs',
            DavidJChavez: 'https://github.com/DavidJChavez',
        },
    },
    {
        title: 'Swapi Example',
        thumbnail: `${projectsImagesPath}/swapi-example/thumbnail.jpg`,
        images: [
            `${projectsImagesPath}/swapi-example/1.png`,
            `${projectsImagesPath}/swapi-example/2.png`,
            `${projectsImagesPath}/swapi-example/3.png`,
            `${projectsImagesPath}/swapi-example/4.png`,
        ],
        date: 'Summer 2019',
        section: 'Learning Project',
        description: 'A webpage made as a test for a working interview, is worth mention that I am currently learning the technologies used.',
        activies: [
            ''
        ],
        repository: 'https://github.com/akotadi/swapi-example',
        link: 'https://swapi-example.herokuapp.com/',
    },
    {
        title: 'Webelectivo',
        thumbnail: `${projectsImagesPath}/webelectivo/thumbnail.jpg`,
        images: [
            `${projectsImagesPath}/webelectivo/1.png`,
            `${projectsImagesPath}/webelectivo/2.png`,
            `${projectsImagesPath}/webelectivo/3.png`,
            `${projectsImagesPath}/webelectivo/4.png`,
            `${projectsImagesPath}/webelectivo/5.png`,
            `${projectsImagesPath}/webelectivo/6.png`,
            `${projectsImagesPath}/webelectivo/7.png`,
            `${projectsImagesPath}/webelectivo/8.png`,
        ],
        date: 'Spring 2018',
        section: 'Scholar Project',
        description: 'A webpage for manage the elective hours (ex: cultural, sport, recreation) of the students.',
        activies: [
            ''
        ],
        repository: 'https://github.com/akotadi/Webelectivo',
        link: 'http://52.15.113.43/',
        teammates: {
            luisca98PS: 'https://github.com/luisca98PS',
        },
    },
];

const images = {
    apms: [
        { src: `${projectsImagesPath}/apms/1.png`, },
        { src: `${projectsImagesPath}/apms/2.png`, },
        { src: `${projectsImagesPath}/apms/3.png`, },
        { src: `${projectsImagesPath}/apms/4.png`, },
        { src: `${projectsImagesPath}/apms/5.png`, },
        { src: `${projectsImagesPath}/apms/6.png`, },
        { src: `${projectsImagesPath}/apms/7.png`, },
        { src: `${projectsImagesPath}/apms/8.png`, },
        { src: `${projectsImagesPath}/apms/9.png`, },
    ],
    'ipn-awards': [
        { src: `${projectsImagesPath}/ipn-awards/1.png`, },
        { src: `${projectsImagesPath}/ipn-awards/2.png`, },
        { src: `${projectsImagesPath}/ipn-awards/3.png`, },
        { src: `${projectsImagesPath}/ipn-awards/4.png`, },
        { src: `${projectsImagesPath}/ipn-awards/5.png`, },
        { src: `${projectsImagesPath}/ipn-awards/6.png`, },
        { src: `${projectsImagesPath}/ipn-awards/7.png`, },
        { src: `${projectsImagesPath}/ipn-awards/8.png`, },
        { src: `${projectsImagesPath}/ipn-awards/9.png`, },
        { src: `${projectsImagesPath}/ipn-awards/10.png`, },
        { src: `${projectsImagesPath}/ipn-awards/11.png`, },
        { src: `${projectsImagesPath}/ipn-awards/12.png`, },
        { src: `${projectsImagesPath}/ipn-awards/13.png`, },
    ],
    'swapi-example': [
        { src: `${projectsImagesPath}/swapi-example/1.png`, },
        { src: `${projectsImagesPath}/swapi-example/2.png`, },
        { src: `${projectsImagesPath}/swapi-example/3.png`, },
        { src: `${projectsImagesPath}/swapi-example/4.png`, },
    ],
    webelectivo: [
        { src: `${projectsImagesPath}/webelectivo/1.png`, },
        { src: `${projectsImagesPath}/webelectivo/2.png`, },
        { src: `${projectsImagesPath}/webelectivo/3.png`, },
        { src: `${projectsImagesPath}/webelectivo/4.png`, },
        { src: `${projectsImagesPath}/webelectivo/5.png`, },
        { src: `${projectsImagesPath}/webelectivo/6.png`, },
        { src: `${projectsImagesPath}/webelectivo/7.png`, },
        { src: `${projectsImagesPath}/webelectivo/8.png`, },
    ],
}

export class ProjectsPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            photoIndex: 0,
            isOpen: false,
            target: null,
        };

    }

    handleClickCard = target => {
        this.setState({ isOpen: true, target: target })
    }

    render() {
        const { photoIndex, isOpen } = this.state;

        return (
            <div className="project-content">
                <Card className="project-section introduction" title="Projects Page">
                    As I said, I am a dummy programmer. This is a little review of my programming life in form of projects.
                </Card>

                <div className="project-section implementation">
                    <div className="custom-grid">
                        {
                            projects.map(project => (
                                <div className="custom-grid-element" key={project.title.trim().replace(/\s+/g, '-').toLowerCase()}>
                                    <Suspense fallback={<i className="pi pi-spin pi-spinner" style={{ 'fontSize': '3em' }}></i>}>
                                        <CustomCard onClickCard={this.handleClickCard} project={project} />
                                    </Suspense>
                                </div>
                            ))
                        }
                    </div>
                </div>

                {isOpen && (
                    <Lightbox
                        mainSrc={images[this.state.target][photoIndex].src}
                        imagePadding={50}
                        nextSrc={images[this.state.target][(photoIndex + 1) % images[this.state.target].length].src}
                        prevSrc={images[this.state.target][(photoIndex + images[this.state.target].length - 1) % images[this.state.target].length].src}
                        onCloseRequest={() => { this.setState({ photoIndex: 0 }); this.setState({ isOpen: false }) }}
                        onMovePrevRequest={() =>
                            this.setState({
                                photoIndex: (photoIndex + images[this.state.target].length - 1) % images[this.state.target].length,
                            })
                        }
                        onMoveNextRequest={() =>
                            this.setState({
                                photoIndex: (photoIndex + 1) % images[this.state.target].length,
                            })
                        }
                    />
                )}
            </div>
        );
    }
}