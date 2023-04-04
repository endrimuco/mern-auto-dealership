import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
// import axios from 'axios';

const Result = () => {
    return (
        <p>Thank you, your message has been sent!</p>
    )
}

function ContactComp(props) {
    const [result,showResult] = useState(false);
    // const [fullName, setFullName] = useState("");
    // const [phone, setPhone] = useState("");
    // const [email, setEmail] = useState("");
    // const [message, setMessage] = useState("");

    // const handleContactSubmitForm = (e) => {
    //     e.preventDefault();
    //     const formData = {
    //         fullName: e.target.fullName.value,
    //         phone: e.target.phone.value,
    //         email: e.target.email.value,
    //         message: e.target.message.value
    //     }
    
    //     axios.post('/api/submit', formData)
    //       .then((result) => {
    //           console.log(result.data);
    //           showResult(true);
    //       })
    //       .catch((error) => {
    //           console.error(error);
    //       });
    //       e.target.reset();
    //   };
    
    //   setTimeout(() => {
    //     showResult(false);
    //   }, 5000);

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
                        // onChange={(e) => setFullName(e.target.value)}
                        // value={fullName}
                        type="text"
                        name="fullName" 
                        id="fullName"  
                        required />
					</label>
					<label class="ContactFormGroup">
						<input class="ContactForm" 
                        placeholder='Phone Number'
                        // onChange={(e) => setPhone(e.target.value)}
                        // value={phone}
                        type="number"
                        name="phone" 
                        id="phone"  
                        required />
					</label>
					<label class="ContactFormGroup">
						<input class="ContactForm" 
                        placeholder='Email' 
                        // onChange={(e) => setEmail(e.target.value)}
                        // value={email}
                        type="email"
                        name="email" 
                        id="email"  
                        required />
					</label>
					<label class="ContactFormGroup" >
						<textarea class="ContactForm" 
                        rows="3"  
                        placeholder='Your Message!'
                        // onChange={(e) => setMessage(e.target.value)}
                        // value={message}
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