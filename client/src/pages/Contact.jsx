import React, { useState } from 'react';
import './Contact.css'; 

export const Contact = () => {
  const [showContent, setShowContent] = useState([false, false, false]);

  const handleToggle = (index) => {
    const updatedShowContent = [...showContent];
    updatedShowContent[index] = !updatedShowContent[index];
    setShowContent(updatedShowContent);
  };

  const images = [
    '/images/sandhya.png',
    '/images/pallavi.png',
    '/images/sahan.png'
  ];

  return (
    <div className="contact-container">
      <div className="contact-left">
        {['Person 1', 'Person 2', 'Person 3'].map((person, index) => (
          <div key={index} className="contact-person">
            <img
              src={images[index]} 
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
        <h2>Why to Contact</h2>
        <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut esse, minus tenetur, libero adipisci quasi natus qui quam in, deserunt quisquam suscipit fugiat neque sunt necessitatibus quas sint laborum ullam!
        </p>
        <h2>Helps You will get</h2>
        <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias ex deleniti ea dignissimos dolore aut nihil adipisci amet, sequi dolor provident architecto molestiae, impedit reprehenderit in non, quis maxime nemo sapiente. In consectetur asperiores esse iste doloremque velit aperiam neque! Magni rem fugit veritatis omnis! Placeat provident cupiditate ullam, doloribus recusandae quae animi voluptatum reprehenderit enim, tempore ab, quisquam sint commodi error quas libero. Possimus a labore provident repellendus hic modi quae voluptatibus vitae suscipit facere. Excepturi distinctio quam quis, numquam iste veritatis quas architecto vero praesentium animi consequatur odio!
        </p>
      </div>
    </div>
  );
};

export default Contact;
