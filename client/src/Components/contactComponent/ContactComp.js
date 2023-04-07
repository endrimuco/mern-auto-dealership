import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const Result = () => {
    return (
        <p>Thank you, your message has been sent!</p>
    )
}

function ContactComp(props) {
    const [result,showResult] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

    
        emailjs.sendForm('service_0z9mg3k', 'template_f4vm7lb', e.target, 'jamXqRXwFioy9YvkA')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
          showResult(true);
      };

      setTimeout(() => {
        showResult(false);
      }, 5000);


    return (
        <div className="contactContainer">
        <div class="ContactCard">

				<form action="" onSubmit={sendEmail}>
                <div className="SentMsg">
                        {result ? <Result /> : null}
                    </div>
					<p className="ContactTitle">Contact us</p>
					<label class="ContactFormGroup">
						<input class="ContactForm" 
                        placeholder='Full Name'
                        type="text"
                        name="fullName" 
                        id="fullName"  
                        required />
					</label>
					<label class="ContactFormGroup">
						<input class="ContactForm" 
                        placeholder='Phone Number'
                        type="number"
                        name="phone" 
                        id="phone"  
                        required />
					</label>
					<label class="ContactFormGroup">
						<input class="ContactForm" 
                        placeholder='Email' 
                        type="email"
                        name="email" 
                        id="email"  
                        required />
					</label>
					<label class="ContactFormGroup" >
						<textarea class="ContactForm" 
                        rows="3"  
                        placeholder='Your Message!'
                        type="textarea"
                        name="message" 
                        id="message" 
                        required></textarea>
                    </label>
                    <button className="ContactSubBtn">Submit</button>
				</form>
			
		</div>
    </div>
    );
};

export default ContactComp;