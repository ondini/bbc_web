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
                    <h1>Investujte s Black Bull Capital a nechte své peníze pracovat naplno!</h1>
                    {/* <p>Získejte pasivní měsíční příjem bez startostí a nechte veškerou práci na profesionálech. Nebudete ale odstřihnuti od svého kapitálu, ten zůstane na vašem účtu a ještě k tomu můžete živě sledovat jednotlivé obchody, které naši profesionální obchodníci s vašimi prostředky dělají.</p>
                     */}
                     <div className="header-content__texts-wrapper">
                        <p>Měsíční pasivní příjem.</p>
                        <p>Přehled všech obchodů LIVE v aplikaci MT4.</p>
                        <p>Žádné paušální poplatky.</p>
                     </div>
                    <form id="form-mail" className="header-content__input" action="http://blackbullcapital.eu/wp-json/contact-form-7/v1/contact-forms/25/feedback" method="post">
                        <input id="your-email" type="email" name="your-email"placeholder="Vaše emailová adresa" />
                        <button type="submit"> Zažádat o konzultaci</button>
                    </form>
                    <p id="form-result-small" className="form-result">Děkujeme, vaše zpráva byla úspěšně odeslána!</p>
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
