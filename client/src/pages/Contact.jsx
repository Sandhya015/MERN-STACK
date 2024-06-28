import React, { useState } from 'react';
import './Contact.css'; // Assuming you have a CSS file for styling

export const Contact = () => {
  const [showContent, setShowContent] = useState([false, false, false]);

  const handleToggle = (index) => {
    const updatedShowContent = [...showContent];
    updatedShowContent[index] = !updatedShowContent[index];
    setShowContent(updatedShowContent);
  };

  return (
    <div className="contact-container">
      <div className="contact-left">
        {['Person 1', 'Person 2', 'Person 3'].map((person, index) => (
          <div key={index} className="contact-person">
            <img
              src={`/images/sandhya.png`} // Replace with your image paths
              alt={person}
              className="contact-image"
              onClick={() => handleToggle(index)}
            />
            {showContent[index] && (
              <div className="contact-details">
                <h2>{person}</h2>
                <p>Role: Example Role</p>
                <p>Email: example{index + 1}@domain.com</p>
                <p>Phone: (123) 456-789{index}</p>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="contact-right">
        <h1>Contact Us</h1>
        <p>
          If you have any questions or need further information, please feel free to contact us. Our team is here to assist you with any inquiries you may have. You can reach out to us via email, phone, or by filling out the contact form on our website.
        </p>
        <h2>How to Contact</h2>
        <p>
          You can contact us by sending an email to the addresses provided or calling the phone numbers listed. Our team will respond to your inquiries as quickly as possible.
        </p>
        <h2>What to Contact</h2>
        <p>
          Feel free to contact us for any questions related to our educational content, resources, or any other inquiries you may have. We are here to help and provide you with the information you need.
        </p>
      </div>
    </div>
  );
};

export default Contact;
