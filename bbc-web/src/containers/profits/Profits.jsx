import React from 'react'
import './Profits.css'
import {Chart, Chart2, Heading} from '../../components'


const Services = () => {
    return (
        <div className="profits-wrapper" id="profits">
            <Heading title="Dosavadní zisky" type="right"/>
            <div className="chart-wrapper container">
                <div className="chart-contaier">
                    <h2> Konzervativní copytrading </h2>
                    <Chart2 color="#353535"/>
                </div>
                <div className="chart-contaier">
                    <h2> Agresivní copytrading</h2>
                    <Chart2 color="#9a3030"/>
                </div>
            </div>
        </div>
    )
}

export default Services
