import React from 'react'
import './Services.css'
import {Feature, FeatureC, Heading} from '../../components'


const strategiesInfo = [
    {
        title: 'Conservative',
        text: ["Allocation for at least 12 months.", "Monthly profit 3-20 %.", "Minimal deposit 2500 USD.", "Management fee 30% of the profit."]},
      {
        title: 'Aggressive',
        text: ["Allocation for at least 6 months.", "Monthly profit 10-30 %.", "Minimal deposit 500 USD.", "Management fee 35% of the profit."]},
  ];

const Phrefed = () =>{return(<p>Create a <a href="https://my.roboforex.com/en/?a=teku">Roboforex</a> account*.</p>)};

const roboforexRef = {
        title: '1. step',
        text: <Phrefed/>};

const strategiesSteps = [
    {
        title: '2. step',
        text: ["Fund your account."]},
    {
        title: '3. step',
        text: ["Connect your account."]},
    {
        title: '4. step',
        text: ["Testing & first trades."]},
    ];


const Services = () => {
    return (
        <div className="services-wrapper" id="services">
            <Heading title="Offered services" type="left"/>
            <div className="whatcopy-wrapper">
                <div className="whatcopy container">
                    <div className="whatcopy-heading">
                        <h1> COPYTRADING </h1>
                        <h2> What is copytrading? </h2>
                        <p>  Copytrading is a service letting investors connect to professional traders and copy they trades automatically. Our investor can monitor his portfolio 24/7. We are mainly using algoritmic trading with a part of manual trading.  .  </p>
                    </div>
                    <div className="whatcopy-features-container">
                        <h1 className="dummy"> Strategies </h1>
                        <h2> Strategies </h2>
                        {strategiesInfo.map((item, index) => (
                            <Feature title={item.title} text={item.text} color={"secondary"} key={item.title + index}/>
                        ))} 
                    </div>
                </div>
            </div>
            <div className="services-container-wrapper">
                <div className="services-container container">
                    <div className="services-cons">
                        <h1> How to join us? </h1>
                        <h2> Conservative copytrading </h2>   
                        <FeatureC title={roboforexRef.title} comp={roboforexRef.text} color={"primary"}/>
                        {strategiesSteps.map((item, index) => (
                            <Feature title={item.title} text={item.text} color={"primary"} key={item.title + index}/>
                        ))} 
                        <div className="videobutton-wrapper">
                            <button className="cons-btn">
                                Videotutorial
                            </button>
                        </div>

                        <p className="add">*During your account registration, it is needed to insert the code: <b>teku</b>.</p>
                    </div>
                    <div className="services-agres">
                        <h1 className="dummy"> How to? </h1>
                        <h2> Aggressive copytrading</h2>

                        <FeatureC title={roboforexRef.title} comp={roboforexRef.text} color={"primary"}/>
                        {strategiesSteps.map((item, index) => (
                            <Feature title={item.title} text={item.text} color={"secondary"} key={item.title + index}/>
                        ))} 
                        <div className="videobutton-wrapper">
                            <button className="agres-btn">
                                Videotutorial
                            </button>
                        </div>
                        <p className="add">*During your account registration, it is needed to insert the code: <b>teku</b>.</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Services
