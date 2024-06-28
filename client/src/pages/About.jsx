import React from 'react';
import './About.css';

export const About = () => {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <div className="about-content">
        <div className="about-box">
          <h2>Our Mission</h2>
          <p>
            Our mission is to provide high-quality educational content to help individuals learn and grow. We believe that education is the key to personal and professional development, and we strive to create resources that are accessible and valuable to everyone.
          </p>
        </div>
        <div className="about-box">
          <h2>What We Offer</h2>
          <p>
            We offer a wide range of educational content, including articles, tutorials, and interactive tools. Our content covers various topics, from basic concepts to advanced knowledge, designed to cater to learners of all levels.
          </p>
        </div>
        <div className="about-box">
          <h2>Our Approach</h2>
          <p>
            We use a flexible approach to education, providing content in various formats to suit different learning styles. Whether you prefer reading, watching videos, or engaging in interactive exercises, we have something for you.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
