import React from 'react'
import {Feature, Heading} from '../../components/'
import './About.css'


const aboutData = [
    {
      title: 'Zkušenosti',
      text: ['Nabízíme zkušený tým analytiků s více než dvánacti lety zkušeností. Tým má široký institucionální background.']},
    {
      title: 'Specializace',
      text: ['Naše primární peciolizace je algoritmický trading. Zaměřujeme se na měnové páry a indexy.']}
  ];


const About = () => {
    return (
        <div className="about-wrapper"  id="about">
            <Heading title="O týmu Black Bull Capital" type="left"/>
            <div className="about-features-wrapper">
              <div className="about container" id="wbbc">
                  <div className="about-heading">
                    <h2>Co může náš tým nabídnout?</h2>
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
