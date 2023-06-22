import React from 'react'
import Feature from '../../components/feature/Feature'
import './Copytrading.css'


const featuresData = [
    {
      title: '1. krok',
      text: 'Založení účtu na platformě metatrader.'},
    {
      title: '2. krok',
      text: 'Vložení kapitálu.'},
    {
      title: '3. krok',
      text: 'Poskytnutí API klíčů našim profesionálním obchodníkům.'},
    {
      title: '4. krok',
      text: 'Sledování zisků.'},
  ];


const Copytrading = () => {
    return (
        <div className="whatbbc_wrapper">
            <div className="whatbbc-button-wrapper">
            <div className="whatbbc container" id="wbbc">
                <div className="whatbbc-heading">
                    <h1>Co přesně je copytrading? Jak jej získat?</h1>
                    <p>Copytrading je služba, při které si založíte vlastní účet s prostředky na obchodováníí, o které se ale postarají naši progesionálové pomocí Vámi poskytnutých API klíčů. Můžete si zvolit způsob obchodování s vaším kapitálém - jestli půjde o dlouhodobé obchody nebo tzv. scalpy. </p>
                </div>
                
                <div className="whatbbc-features-container">
                    {featuresData.map((item, index) => (
                        <Feature title={item.title} text={item.text}  color={"primary"}  key={item.title + index} />
                    ))} 
                </div>
            </div>
            <button className="whatbbc-btn">
                Zajistit copytrading
            </button>
            </div>
            
        </div>
    )
}

export default Copytrading
