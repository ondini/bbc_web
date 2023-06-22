import React from 'react'
import Feature from '../../components/feature/Feature'
import './Signals.css'


const featuresData = [
    {
      title: '1. krok',
      text: 'Holder of this place which is a palace!'    },
    {
      title: '2. krok',
      text: 'Placeholder'   },
    {
      title: '3. krok',
      text: 'Kokoska pastusi tobolka'},
    {
      title: '4. krok',
      text: 'Niecooo.'},
  ];


const Signals = () => {
    return (
        <div className="signals_wrapper">
            <div className="signals-button-wrapper">
            <div className="signals container" id="wybbc">
                <div className="signals-heading">
                    <h1 className="gradient__text">Co získám v signální skupině? Jak se do ní přidám? </h1>
                    <p>Pokud nechcete pouze pasivně sledovat jak profesionální obchodníci pracují s vaším kapitálem, ale obchodovat sami, můžete využít naši signální skupinu. Ta vám pomůže nepropásnout žádnou šanci k dobrému obchodu. </p>
                </div>
                <div className="signals-features-container">
                    {featuresData.map((item, index) => (
                        <Feature title={item.title} text={item.text} color={"secondary_paragraph"} key={item.title + index}/>
                    ))} 
                </div>
            </div>
            <button className="signals-btn">
                Zajistit signály
            </button>
            </div>
        </div>
    )
}

export default Signals
