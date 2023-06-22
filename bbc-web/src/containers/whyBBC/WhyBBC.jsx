import React from 'react'
import {Card, Heading} from '../../components/'
import './WhyBBC.css'


const prosData = [
    {
      title: 'Transparentnost',
      text: 'Sledujte každý obchod, který bude s vaším kapitálem vykonán.'},
    {
      title: 'Jednoduchost',
      text: 'Jednoduché připojení a investování automatickým kopírováním stovek obchodů naších traderů.',
    },
    {
      title: 'Stabilita',
      text: 'Bezpečné strategie, kalkulované riziko vs odměna.'},

  ];


const WhyBBC = () => {
    return (
        <div className="whybbc-wrapper"  id="whybbc">
            <Heading title="Proč zvolit Black Bull Capital?" type="right"/>
            <div className="whybbc-container container">
                  {prosData.map((item, index) => (
                      <Card title={item.title} text={item.text} color={"primary"} key={item.title + index}/>
                  ))}
            </div>
        </div>
    )
}

export default WhyBBC
