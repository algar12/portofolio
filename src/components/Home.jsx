import React, { useState, useEffect } from 'react';
import FsLightbox from 'fslightbox-react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Container } from 'react-bootstrap';
// import { useState } from 'react';

// Since we can't import actual images, I'll use placeholder URLs
// Replace these with your actual image imports
import realProfile from "../assets/img/profile1.webp";
import hoverProfile from "../assets/img/profile1.webp";
const Hi = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='35' height='35' viewBox='0 0 35 35'%3E%3Ctext y='25' font-size='25'%3E👋%3C/text%3E%3C/svg%3E";

function Home() {
  const [image, setImage] = useState(realProfile);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  function setAvatarReal() {
    setImage(hoverProfile);
  }

  function setAvatarAnimation() {
    setImage(realProfile);
  }

  return (
    <>
     <HelmetProvider>
        <Helmet>
          <title>Ghofur - Home</title>
        </Helmet>
      </HelmetProvider>
    <div className="home-container">
      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .home-container {
          min-height: 100vh;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          position: relative;
          overflow: hidden;
        }

        .home-container::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 40% 80%, rgba(120, 219, 255, 0.3) 0%, transparent 50%);
          animation: float 6s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(2deg); }
        }

        .home-wrapper {
          position: relative;
          z-index: 1;
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding: 2rem;
        }

        .home-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
          max-width: 1200px;
          margin: 0 auto;
          width: 100%;
        }

        .home-left {
          opacity: ${isVisible ? 1 : 0};
          transform: translateX(${isVisible ? 0 : -50}px);
          transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
          transition-delay: 0.2s;
        }

        .greeting {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 1.5rem;
          font-weight: 300;
          color: rgba(255, 255, 255, 0.9);
          margin-bottom: 1rem;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        .wave-emoji {
          animation: wave 2s ease-in-out infinite;
          transform-origin: 70% 70%;
        }

        @keyframes wave {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(20deg); }
          75% { transform: rotate(-10deg); }
        }

        .name-container {
          margin-bottom: 2rem;
        }

        .name-title {
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 700;
          color: white;
          line-height: 1.1;
          margin-bottom: 0.5rem;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        .name-highlight {
          background: linear-gradient(45deg, #ffd700, #ff6b6b, #4ecdc4, #45b7d1);
          background-size: 300% 300%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gradientShift 4s ease-in-out infinite;
          display: inline-block;
          transition: transform 0.3s ease;
        }

        .name-highlight:hover {
          transform: scale(1.05);
        }

        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        .subtitle {
          font-size: 1.2rem;
          color: rgba(255, 255, 255, 0.8);
          font-weight: 300;
          margin-bottom: 3rem;
          line-height: 1.6;
        }

        .cta-button {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: white;
          padding: 1rem 2rem;
          border-radius: 50px;
          text-decoration: none;
          font-weight: 600;
          font-size: 1.1rem;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }

        .cta-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transition: left 0.5s;
        }

        .cta-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
          background: rgba(255, 255, 255, 0.2);
          color: white;
          text-decoration: none;
        }

        .cta-button:hover::before {
          left: 100%;
        }

        .home-right {
          display: flex;
          justify-content: center;
          align-items: center;
          opacity: ${isVisible ? 1 : 0};
          transform: translateX(${isVisible ? 0 : 50}px);
          transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
          transition-delay: 0.4s;
        }

        .image-container {
          position: relative;
          width: 350px;
          height: 350px;
        }

        .image-container::before {
          content: '';
          position: absolute;
          top: -20px;
          left: -20px;
          right: -20px;
          bottom: -20px;
          background: linear-gradient(45deg, #ffd700, #ff6b6b, #4ecdc4, #45b7d1);
          border-radius: 50%;
          opacity: 0.7;
          animation: rotate 8s linear infinite;
          z-index: -1;
        }

        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .home-image {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          object-fit: cover;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          border: 4px solid rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(10px);
          cursor: pointer;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
        }

        .home-image:hover {
          transform: scale(1.05) rotate(5deg);
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.3);
        }

        .floating-elements {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          overflow: hidden;
        }

        .floating-element {
          position: absolute;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          animation: floatUp 6s linear infinite;
        }

        .floating-element:nth-child(1) {
          width: 10px;
          height: 10px;
          left: 10%;
          animation-delay: 0s;
        }

        .floating-element:nth-child(2) {
          width: 8px;
          height: 8px;
          left: 20%;
          animation-delay: 1s;
        }

        .floating-element:nth-child(3) {
          width: 12px;
          height: 12px;
          left: 30%;
          animation-delay: 2s;
        }

        .floating-element:nth-child(4) {
          width: 6px;
          height: 6px;
          left: 70%;
          animation-delay: 3s;
        }

        .floating-element:nth-child(5) {
          width: 9px;
          height: 9px;
          left: 80%;
          animation-delay: 4s;
        }

        @keyframes floatUp {
          0% {
            transform: translateY(100vh) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100px) rotate(360deg);
            opacity: 0;
          }
        }

        @media (max-width: 768px) {
          .home-content {
            grid-template-columns: 1fr;
            gap: 2rem;
            text-align: center;
          }

          .home-wrapper {
            padding: 1rem;
          }

          .name-title {
            font-size: 2.5rem;
          }

          .greeting {
            font-size: 1.2rem;
            justify-content: center;
          }

          .image-container {
            width: 250px;
            height: 250px;
          }
        }
      `}</style>

      <div className="floating-elements">
        <div className="floating-element"></div>
        <div className="floating-element"></div>
        <div className="floating-element"></div>
        <div className="floating-element"></div>
        <div className="floating-element"></div>
      </div>

      <div className="home-wrapper">
        <div className="home-content">
          <div className="home-left">
            <div className="greeting">
              Hi there <img width="35" src={Hi} alt="Hi" className="wave-emoji" />, my name is
            </div>
            
            <div className="name-container">
              <h1 className="name-title">
                <span className="name-highlight">Muhammad</span>
                <br />
                <span className="name-highlight">Abdul Ghofur</span>
              </h1>
            </div>

            <p className="subtitle">
              Passionate developer crafting digital experiences that make a difference. 
              Let's build something amazing together.
            </p>

            <a href="/contact" className="cta-button">
              <span>Let's Connect</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>

          <div className="home-right">
            <div className="image-container">
              <img
                className="home-image"
                src={image}
                onMouseOver={setAvatarReal}
                onMouseOut={setAvatarAnimation}
                alt="Muhammad Thoriq Ali Said"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Home;