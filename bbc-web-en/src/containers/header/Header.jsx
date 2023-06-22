import React from 'react'
import './Header.css'

import hero_image from '../../assets/BBC_bull2.jpeg';



const Header = () => {
    //const formElement = document.querySelector("form");
    //window.addEventListener("submit", formSubmissionHandler);
    return (
        <div className="header-wrapper" id="home"> 
            <header className="header container">
                <div className="header-content ">
                    <h1>Manage your funds with Black Bull Capital and let it fully earn!</h1>
                    {/* <p>Získejte pasivní měsíční příjem bez startostí a nechte veškerou práci na profesionálech. Nebudete ale odstřihnuti od svého kapitálu, ten zůstane na vašem účtu a ještě k tomu můžete živě sledovat jednotlivé obchody, které naši profesionální obchodníci s vašimi prostředky dělají.</p>
                     */}
                      <div className="header-content__texts-wrapper">
                        <p>Monthly passive income.</p>
                        <p>Monitor your account 24/7 in MT4 app.</p>
                        <p>No fixed fees.</p>
                     </div>
                    <form id="form-mail" className="header-content__input" action="http://blackbullcapital.eu/wp-json/contact-form-7/v1/contact-forms/25/feedback" method="post">
                        <input id="your-email" type="email" name="your-email"placeholder="Your email address" />
                        <button type="submit"> Request consultation</button>
                    </form>
                    <p id="form-result-small" className="form-result">Thank you for your request!</p>
                    {/*
                    <div className="header-content__people">
                        <img src={people} alt="people"/>
                        <p>1,600 investorů se přidalo za poslední měsíc</p>
                    </div>*/}
                </div>

                <div className="header-image">
                    <img src={hero_image} alt="ai_image" />
                </div>
            </header>
        </div>
    )
}

export default Header
