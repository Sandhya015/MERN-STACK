import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css'; 

export const Home = () => {
  const navigate = useNavigate();

  const handleJoinClick = () => {
    navigate('/register');
  };

  return (
    <div className="home-container">
      <section className="home-background">
        <div className="home-content">
          <h1>Welcome to Our Community</h1>
          <p>
            We are excited to have you here! Our community is a vibrant and dynamic place where you can connect with like-minded individuals, share ideas, and grow together. Whether you are looking for resources, support, or simply a place to belong, you will find it all here.
          </p>
          <h2>Why Join Us?</h2>
          <ul>
            <li>Access exclusive content and resources</li>
            <li>Engage in insightful discussions and forums</li>
            <li>Participate in events and webinars</li>
            <li>Stay updated with our latest news and newsletters</li>
          </ul><br></br>
          <button className="join-button" onClick={handleJoinClick}>Join Now</button>
        </div>
      </section>
    </div>
  );
};

export default Home;
