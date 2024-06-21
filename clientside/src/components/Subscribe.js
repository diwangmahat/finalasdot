import React, { useState } from "react";
import "./Subscribestyles.css";

function Subscribe() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(
        "https://api.asdot.com.au/subscribe",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );

      if (response.ok) {
        setMessage("Subscription successful! Thank you for subscribing.");
      } else {
        const errorText = await response.text();
        setMessage(errorText);
      }
    } catch (error) {
      setMessage("Subscription failed. Please try again.");
    }
  };

  return (
    <div className="subscribe-container">
      <div className="subscribe-hr flex flex-col">
        <div className="line"></div>
        <h3>JOIN OUR MAILING LIST</h3>
        <p className="text-center">
        Stay ahead in tech with our newsletter! Subscribe now for exclusive insights, latest trends, and special offers delivered straight to your inbox. 
        </p>
      </div>
      <form
        id="subscribe-form"
        className="subscribe-form flex flex-sb gap-2"
        onSubmit={handleSubmit}
      >
        
        <input
          type="email"
          required
          placeholder="Enter your mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit" className="btn_hover1">
          Subscribe
        </button>
      </form>
      <div id="subscribe-message">{message}</div>
    </div>
  );
}

export default Subscribe;
