import React from 'react';
import './App.css';

import {Header, Navbar, Contact, Profits, Footer, Services, WhyBBC, CTA, About} from './containers';

const App = () => {
    return (
        <div className='App'>
            <Navbar />
            <Header />
            <WhyBBC />
            <Services />
            <Profits />
            <About />
            <Contact />
            <CTA />
            <Footer />
        </div>
    )
}

export default App
