import React, { useState } from "react";
import "./ContactFormStyles.css"; // Assuming you have the styles in a separate CSS file

function ContactForm() {
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [PhoneError, setPhoneError] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });
  const [message, setMessage] = useState("");

  const handleNameChange = (event) => {
    const value = event.target.value;
    const regex = /^[a-zA-Z\s]*$/;
    setNameError(!regex.test(value));
    setFormData({ ...formData, fullName: value });
  };

  const handleEmailChange = (event) => {
    const value = event.target.value;
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmailError(!regex.test(value));
    setFormData({ ...formData, email: value });
  };

  const handlephoneNumberChange = (event) => {
    const value = event.target.value;
    const regex = /^[0-9\b]+$/;
    setPhoneError(!regex.test(value));
    setFormData({ ...formData, phoneNumber: value });
  };

  const handleMessageChange = (event) => {
    const value = event.target.value;
    setFormData({ ...formData, message: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { fullName, email, message, phoneNumber } = formData;

    try {
      const response = await fetch(
        "http://localhost:3011/api/users/sendMessage",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ fullName, email, message, phoneNumber }),
        }
      ).catch((error) => {
        // Handle network errors
        console.error("Network error:", error);
        setMessage("Network error");
        alert("Network error");
      });

      if (response && response.ok) {
        setMessage("Message sent successfully!");
        alert("Message sent successfully!");
      } else {
        setMessage("Error sending message");
        alert("Error sending message");
      }
    } catch (error) {
      // Handle other errors
      console.error("Error:", error);
      setMessage("Error sending message");
      alert("Error sending message");
    }
  };

  return (
    <div className="container-contact">
      <div className="row">
        <div className="contact-info">
          <div className="contact-info-item">
            <div className="contact-info-icon">
              <i className="fas fa-home"></i>
            </div>
            <div className="contact-info-content">
              <h4>Address</h4>
              <p>
                42 The avenue, Hurstville
                <br /> Sydney, Australia,
                <br /> 2220
              </p>
            </div>
          </div>

          <div className="contact-info-item">
            <div className="contact-info-icon">
              <i className="fas fa-phone"></i>
            </div>
            <div className="contact-info-content">
              <h4>Phone</h4>
              <a href="tel:+">+61410592287</a>
            </div>
          </div>

          <div className="contact-info-item">
            <div className="contact-info-icon">
              <i className="fas fa-envelope"></i>
            </div>
            <div className="contact-info-content">
              <h4>Email</h4>
              <a href="mailto:">info@asdot.com.au</a>
            </div>
          </div>
        </div>

        <div className="contact-form">
          <form onSubmit={handleSubmit} id="contact-form">
            <h2>Send Message</h2>
            <div className={`input-box ${nameError ? "invalid" : ""}`}>
              <input
                type="text"
                name="fullName"
                required
                onChange={handleNameChange}
                placeholder=""
              />
              <span>Full Name</span>
            </div>

            <div className={`input-box ${emailError ? "invalid" : ""}`}>
              <input
                type="email"
                name="email"
                required
                onChange={handleEmailChange}
              />
              <span>Email</span>
            </div>

            <div className={`input-box ${PhoneError ? "invalid" : ""}`}>
              <input
                type="phone"
                name="phone"
                required
                onChange={handlephoneNumberChange}
              />
              <span>Phone</span>
            </div>

            <div className="input-box">
              <textarea
                required
                name="message"
                onChange={handleMessageChange}
              ></textarea>
              <span>Type your Message...</span>
            </div>

            <div className="input-box">
              <input type="submit" value="Send" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
