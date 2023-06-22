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
          document.getElementById(el_id).innerHTML = "Please insert message correctly."
          document.getElementById(el_id).style.display = 'block';

        } else {
            // Handle the happy path
            formElement.reset()
            document.getElementById(el_id).innerHTML = "Thank you for your message!"
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
        document.getElementById(el_id).innerHTML = "An error occured! Try again later, please."
      });
  };
  

const Contact = () => {

    //const formElement = document.querySelector("form");
    window.addEventListener("submit", formSubmissionHandler);
    return (
        <div className="contact-wrapper " id="contact">
            <Heading title="Contact us" type="right"/>
                <form id="form-message" className="input-wrapper container" action="http://blackbullcapital.eu/wp-json/contact-form-7/v1/contact-forms/25/feedback" method="post">
                    <input id="your-email" name="your-email" type="email" placeholder="Your email address"/>
                    <textarea id="your-message" type="text" name="your-message" placeholder="Your message" />
                    <p id="form-result" className="form-result">Thank you for your message!</p>
                    <button id="contact-btn" className="contact-btn" type="submit">
                        Send message
                    </button>

                </form>
        </div>
    )
}

export default Contact
