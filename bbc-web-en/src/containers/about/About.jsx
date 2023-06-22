import React from 'react'
import {Feature, Heading} from '../../components/'
import './About.css'


const aboutData = [
    {
      title: 'Experience',
      text: ['Experienced team of traders and analysts. Institucional background.']},
    {
      title: 'Specialization',
      text: ['Our specialization is at algorithmic trading focused on forex and stocks.'],
    },
  ];


const About = () => {
    return (
        <div className="about-wrapper"  id="about">
            <Heading title="About Black Bull Capital team" type="left"/>
            <div className="about-features-wrapper">
              <div className="about container" id="wbbc">
                  <div className="about-heading">
                    <h2>What can our team offer?</h2>
                  </div>
                  <div className="about-features-container">
                      {aboutData.map((item, index) => (
                          <Feature title={item.title} text={item.text} color={"primary"} key={item.title + index}/>
                      ))} 
                  </div>
              </div>
            </div>
        </div>
    )
}

export default About
