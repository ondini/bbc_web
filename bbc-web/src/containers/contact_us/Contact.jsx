import React from 'react'
import './Contact.css'
import {Heading} from '../../components'

const isFormSubmissionError = (response) => {
  if (response.status === "mail_sent"){
      return false;
  }
  return true;
  
}
const formSubmissionHandler = (event) => {
    event.preventDefault();
    const formElement = event.target,
      { action, method } = formElement,
      body = new FormData(formElement);
    
    var mail = formElement.id === "form-mail"; //editing only the e-mail form
    var el_id = mail ? 'form-result-small' : 'form-result';

    fetch(action, {
      method,
      body
    })
      .then((response) => response.json())
      .then((response) => {
        // Determine if the submission is not valid
        if (isFormSubmissionError(response)) {
          // Handle the case when there are validation errors
          document.getElementById(el_id).innerHTML = "Zadejte prosím zprávu správně."
          document.getElementById(el_id).style.display = 'block';

        } else {
            // Handle the happy path
            formElement.reset()
            document.getElementById(el_id).innerHTML = "Děkujeme, vaše zpráva byla úspěšně odeslána!"
            document.getElementById(el_id).style.display = 'block';
            if (!mail){
                document.getElementById('contact-btn').style.display = 'none';
            }

        }
      })
      .catch((error) => {
        // Handle the case when there's a problem with the request
        console.log(error)
        document.getElementById(el_id).style.display = 'block';
        document.getElementById(el_id).innerHTML = "Vyskytla se chyba! Zkuste to prosím znovu později."
      });
  };
  

const Contact = () => {

    //const formElement = document.querySelector("form");
    window.addEventListener("submit", formSubmissionHandler);
    return (
        <div className="contact-wrapper " id="contact">
            <Heading title="Kontaktujte nás" type="right"/>
                <form id="form-message" className="input-wrapper container" action="http://blackbullcapital.eu/wp-json/contact-form-7/v1/contact-forms/25/feedback" method="post">
                    <input id="your-email" name="your-email" type="email" placeholder="Vaše emailová adresa"/>
                    <textarea id="your-message" type="text" name="your-message" placeholder="Vaše zpráva" />
                    <p id="form-result" className="form-result">Děkujeme, vaše zpráva byla úspěšně odeslána!</p>
                    <button id="contact-btn" className="contact-btn" type="submit">
                        Odeslat zprávu
                    </button>

                </form>
        </div>
    )
}

export default Contact
