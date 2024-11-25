import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    contactName: '',
    contactEmail: '',
    contactSubject: '',
    contactMessage: '',
  });

  const [status, setStatus] = useState({
    sending: false,
    success: false,
    error: false,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus({ sending: true, success: false, error: false });

    // EmailJS Send Email
    emailjs
      .sendForm(
        'your_service_id', // Your EmailJS service ID
        'your_template_id', // Your EmailJS template ID
        e.target, // The form element
        'your_user_id' // Your EmailJS user ID
      )
      .then(
        (result) => {
          setStatus({ sending: false, success: true, error: false });
        },
        (error) => {
          setStatus({ sending: false, success: false, error: true });
        }
      );
  };

  return (
    <section id="contact">
      <div className="row section-intro">
        <div className="col-twelve">
          <h5>Contact</h5>
          <h1>I'd Love To Hear From You.</h1>
          <p className="lead">
            Feel free to reach out to me for any queries or collaboration opportunities. I am happy to assist you!
          </p>
        </div>
      </div>

      <div className="row contact-form">
        <div className="col-twelve">
          <form id="contactForm" onSubmit={handleSubmit}>
            <fieldset>
              <div className="form-field">
                <input
                  name="contactName"
                  type="text"
                  id="contactName"
                  placeholder="Your Name"
                  value={formData.contactName}
                  onChange={handleInputChange}
                  minLength="2"
                  required
                />
              </div>
              <div className="form-field">
                <input
                  name="contactEmail"
                  type="email"
                  id="contactEmail"
                  placeholder="Your Email"
                  value={formData.contactEmail}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-field">
                <input
                  name="contactSubject"
                  type="text"
                  id="contactSubject"
                  placeholder="Subject"
                  value={formData.contactSubject}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-field">
                <textarea
                  name="contactMessage"
                  id="contactMessage"
                  placeholder="Message"
                  rows="10"
                  value={formData.contactMessage}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-field">
                <button type="submit" className="submitform" disabled={status.sending}>
                  {status.sending ? 'Sending...' : 'Submit'}
                </button>
                {status.sending && (
                  <div id="submit-loader">
                    <div className="text-loader">Sending...</div>
                    <div className="s-loader">
                      <div className="bounce1"></div>
                      <div className="bounce2"></div>
                      <div className="bounce3"></div>
                    </div>
                  </div>
                )}
              </div>
            </fieldset>
          </form>
          {status.error && <div id="message-warning">Oops! Something went wrong, please try again.</div>}
          {status.success && (
            <div id="message-success">
              <i className="fa fa-check"></i>Your message was sent successfully! Thank you for reaching out.
            </div>
          )}
        </div>
      </div>

      <div className="row contact-info">
        <div className="col-four tab-full">
          <div className="icon">
            <i className="icon-pin"></i>
          </div>
          <h5>Where to find me</h5>
          <p>
            street 20, house 20<br />
            Islamabad<br />
            Pakistan
          </p>
        </div>

        <div className="col-four tab-full collapse">
          <div className="icon">
            <i className="icon-mail"></i>
          </div>
          <h5>Email Me At</h5>
          <p>
            mawais579810@gmail.com<br />
            mawais08979@gmail.com
          </p>
        </div>

        <div className="col-four tab-full">
          <div className="icon">
            <i className="icon-phone"></i>
          </div>
          <h5>Call Me At</h5>
          <p>
            Phone: (+92) 3081075851<br />
            Mobile: (+63) 3081075851<br />
            {/* Fax: (+63) 555 0101 */}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
