import React, { Component } from 'react';

import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import customSlider from './../layout/_customSlider.scss';

import { TabView, TabPanel } from 'primereact/tabview';

const images = {
    awards: [
        { id: 1, src: './assets/demo/images/awards/award5th.jpg', title: 'Award 5th Semester' },
        { id: 2, src: './assets/demo/images/awards/award4th.jpg', title: 'Award 4th Semester' },
        { id: 3, src: './assets/demo/images/awards/award3rd.jpg', title: 'Award 3rd Semester' },
        { id: 4, src: './assets/demo/images/awards/award2nd.jpg', title: 'Award 2nd Semester' },
    ],
    idioms: [
        { id: 5, src: './assets/demo/images/awards/Certificato1.jpg', title: 'Certificato d\'italino' },
        { id: 6, src: './assets/demo/images/awards/TOEFL.jpg', title: 'Certificate TOEFL ITP' },
    ],
    contest: [
        { id: 7, src: './assets/demo/images/awards/3rdPlace-Contest.jpg', title: 'Award 3rd Place - ACM Regional Contest 2nd date' },
        { id: 8, src: './assets/demo/images/awards/contestESCOM2018.jpg', title: 'Certificate of assistance to ESCOM Contest 2018' },
    ],
}

export class AwardsPage extends Component {
    constructor(props){
        super(props);

        this.state = {
            activeIndex: 0,
            images: images,
        };

    }

    render() {
        const { activeIndex, images } = this.state;

        return (
            <div className="award-content">
                <div className="award-section introduction">
                    <div className="feature-intro">
                        <h1>Awards Page</h1>
                        <p>During my life I have been improving myself little by little, this section is a sample of my development in this world. </p>
                        <p>Also, is a reminder of what I can do and a motivation to myself.</p>
                    </div>
                </div>

                <div className="award-section implementation">
                    <TabView activeIndex={activeIndex} onTabChange={(e) => this.setState({ activeIndex: e.index })}>
                        {
                            // TabPanel - header:target
                                // Carousel
                                    // div (image) - src:src Legend:title
                            Object.keys(images).map(target => {
                                return (
                                    <TabPanel header={target.charAt(0).toUpperCase() + target.slice(1)} key={target}>
                                        <AwesomeSlider name={`slider-${target}`} cssModule={customSlider}>
                                            {
                                                images[target].map(item => {
                                                    return (
                                                        <div data-src={item.src} key={item.title}>
                                                            <div className="caption">
                                                                <p>{item.title}</p>
                                                            </div>
                                                        </div>
                                                    )
                                                }) 
                                            }
                                        </AwesomeSlider>
                                        <br />
                                        <br />
                                        <br />
                                    </TabPanel>
                                )
                            })
                        }
                    </TabView>
                </div>
            </div>
        );
    }
}