import React from 'react'
import './Services.css'
import {Feature, FeatureC, Heading} from '../../components'


const strategiesInfo = [
    {
      title: 'Konzervativní',
      text: ["Alokace na min. 12 měsíců.", "Zhodnocení 3-20 % měsíčně.", "Minimální kapitál 2500 USD.", "Manažerský poplatek 30% ze zisku."]},
    {
      title: 'Agresivní',
      text: ["Alokace na min. 6 měsíců.", "Zhodnocení 10-30 % měsíčně.", "Minimální kapitál 500 USD.", "Manažerský poplatek 35% ze zisku."]},
  ];

const Phrefed = () =>{return(<p>Založení účtu na <a href="https://my.roboforex.com/en/?a=teku">Roboforex</a>*.</p>)};

const roboforexRef = {
        title: '1. krok',
        text: <Phrefed/>};

const strategiesSteps = [
    {
        title: '2. krok',
        text: ["Vložení prostředků."]},
    {
        title: '3. krok',
        text: ["Připojení."]},
    {
        title: '4. krok',
        text: ["Test a spuštění."]},
    ];


const Services = () => {
    return (
        <div className="services-wrapper" id="services">
            <Heading title="Nabídka služeb" type="left"/>
            <div className="whatcopy-wrapper">
                <div className="whatcopy container">
                    <div className="whatcopy-heading">
                        <h1> COPYTRADING </h1>
                        <h2> Co přesně je copytrading? </h2>
                        <p>  Copytrading je služba, která umožňuje investorům svěřit své prostředky profesionálnímu týmu traderů. Tyto prostředky investor nikam neposílá, zůstávají na jeho účtu. Analytici mají pouze autorizaci k otevírání a zavírání obchodů. Copytrading je transparentní, investor, tak vidí všechny obchody na svém účtu. Odměna pro poskytovale služby vychází pouze ze zisků, neplatíte žádnou paušální částku. V rámci copytradnigu nabízíme dva druhy strategií.  </p>
                    </div>
                    <div className="whatcopy-features-container">
                        <h1 className="dummy"> Strategie </h1>
                        <h2> Druhy strategií </h2>
                        {strategiesInfo.map((item, index) => (
                            <Feature title={item.title} text={item.text} color={"secondary"} key={item.title + index}/>
                        ))} 
                    </div>
                </div>
            </div>
            <div className="services-container-wrapper">
                <div className="services-container container">
                    <div className="services-cons">
                        <h1> Jak získat přístup? </h1>
                        <h2> Konzervativní copytrading </h2>   
                        <FeatureC title={roboforexRef.title} comp={roboforexRef.text} color={"primary"}/>
                        {strategiesSteps.map((item, index) => (
                            <Feature title={item.title} text={item.text} color={"primary"} key={item.title + index}/>
                        ))} 
                        <div className="videobutton-wrapper">
                            <button className="cons-btn">
                                Videotutoriál
                            </button>
                        </div>

                        <p className="add">*Při registraci je třeba zadat kód: <b>teku</b>.</p>
                    </div>
                    <div className="services-agres">
                        <h1 className="dummy"> Jak získat? </h1>
                        <h2> Agresivní copytrading</h2>

                        <FeatureC title={roboforexRef.title} comp={roboforexRef.text} color={"primary"}/>
                        {strategiesSteps.map((item, index) => (
                            <Feature title={item.title} text={item.text} color={"secondary"} key={item.title + index}/>
                        ))} 
                        <div className="videobutton-wrapper">
                            <button className="agres-btn">
                                Videotutoriál
                            </button>
                        </div>
                        <p className="add">*Při registraci je třeba zadat kód: <b>teku</b>.</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Services
