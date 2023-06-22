import React from 'react'
import Card from '../../components/card/Card'
import './About.css'


const aboutData = [
    {
      title: 'Zkušenosti',
      text: 'Nabízíme zkušený tým analytiků s více než dvánacti lety zkušeností. Tým má široký institucionální background.'},
    {
      title: 'Specializace',
      text: 'Našr primární peciolizace je algoritmický trading. Zaměřujeme se na měnové páry a indexy..',
    },
    {
      title: 'Nievieumužcos',
      text: 'Pasivní příjem s výnosem až 50% z vložené částky každý měsíc.'    },

  ];


const About = () => {
    return (
        <div className="about-wrapper"  id="about">
            <div className="about-heading">
                <h1> O Black Bull Capital týmu </h1>
                <div></div>
            </div>
            <div className="about-container container">
                  {aboutData.map((item, index) => (
                      <Card title={item.title} text={item.text} color={"primary"} key={item.title + index}/>
                  ))}
            </div>
        </div>
    )
}

export default About
