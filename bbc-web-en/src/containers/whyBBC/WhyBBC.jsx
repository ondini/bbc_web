import React from 'react'
import {Card, Heading} from '../../components/'
import './WhyBBC.css'


const prosData = [
  {
    title: 'Transparency',
    text: 'Watch every trade on your app.'},
  {
    title: 'Simplicity',
    text: 'Easy connection to our trading setups.',
  },
  {
    title: 'Stability',
    text: 'Safe strategy. Calculated risk vs reward.'},

];


const WhyBBC = () => {
  return (
      <div className="whybbc-wrapper"  id="whybbc">
          <Heading title="Why Black Bull Capital?" type="right"/>
          <div className="whybbc-container container">
                {prosData.map((item, index) => (
                    <Card title={item.title} text={item.text} color={"primary"} key={item.title + index}/>
                ))}
          </div>
      </div>
  )
}


export default WhyBBC
