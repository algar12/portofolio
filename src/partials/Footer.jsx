import React from 'react';

// Icon components using SVG since we can't import react-icons
const GithubIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const FacebookIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const LinkedinIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

function Footer() {
  return (
    <footer className="modern-footer">
      <style jsx>{`
        .modern-footer {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          position: relative;
          padding: 3rem 2rem 2rem;
          margin-top: 4rem;
          overflow: hidden;
        }

        .modern-footer::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            radial-gradient(circle at 30% 40%, rgba(120, 119, 198, 0.2) 0%, transparent 50%),
            radial-gradient(circle at 70% 80%, rgba(255, 119, 198, 0.2) 0%, transparent 50%);
          animation: footerFloat 8s ease-in-out infinite;
        }

        @keyframes footerFloat {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-10px) scale(1.02); }
        }

        .footer-content {
          position: relative;
          z-index: 1;
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 2rem;
        }

        .footer-left {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .footer-logo {
          font-size: 1.5rem;
          font-weight: 700;
          background: linear-gradient(45deg, #ffd700, #ff6b6b, #4ecdc4);
          background-size: 300% 300%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gradientShift 3s ease-in-out infinite;
        }

        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        .footer-copyright {
          color: rgba(255, 255, 255, 0.8);
          font-size: 0.9rem;
          margin: 0;
          font-weight: 300;
        }

        .footer-right {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .social-link {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: white;
          padding: 0.75rem 1.5rem;
          border-radius: 25px;
          text-decoration: none;
          font-weight: 500;
          font-size: 0.9rem;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }

        .social-link::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
          transition: left 0.5s;
        }

        .social-link:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
          background: rgba(255, 255, 255, 0.2);
          color: white;
          text-decoration: none;
        }

        .social-link:hover::before {
          left: 100%;
        }

        .social-link.github:hover {
          border-color: #333;
          box-shadow: 0 8px 25px rgba(51, 51, 51, 0.3);
        }

        .social-link.instagram:hover {
          border-color: #E4405F;
          box-shadow: 0 8px 25px rgba(228, 64, 95, 0.3);
        }

        .social-link.facebook:hover {
          border-color: #1877F2;
          box-shadow: 0 8px 25px rgba(24, 119, 242, 0.3);
        }

        .social-link.linkedin:hover {
          border-color: #0077B5;
          box-shadow: 0 8px 25px rgba(0, 119, 181, 0.3);
        }

        .footer-divider {
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 60px;
          height: 4px;
          background: linear-gradient(45deg, #ffd700, #ff6b6b, #4ecdc4);
          border-radius: 2px;
          animation: gradientShift 3s ease-in-out infinite;
        }

        .floating-particles {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          overflow: hidden;
        }

        .particle {
          position: absolute;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          animation: floatParticle 8s linear infinite;
        }

        .particle:nth-child(1) {
          width: 6px;
          height: 6px;
          left: 10%;
          animation-delay: 0s;
        }

        .particle:nth-child(2) {
          width: 4px;
          height: 4px;
          left: 30%;
          animation-delay: 2s;
        }

        .particle:nth-child(3) {
          width: 8px;
          height: 8px;
          left: 70%;
          animation-delay: 4s;
        }

        .particle:nth-child(4) {
          width: 5px;
          height: 5px;
          left: 90%;
          animation-delay: 6s;
        }

        @keyframes floatParticle {
          0% {
            transform: translateY(100px) rotate(0deg);
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
          .modern-footer {
            padding: 2rem 1rem;
          }

          .footer-content {
            flex-direction: column;
            text-align: center;
            gap: 2rem;
          }

          .footer-right {
            justify-content: center;
          }

          .social-link {
            padding: 0.6rem 1.2rem;
            font-size: 0.8rem;
          }
        }

        @media (max-width: 480px) {
          .footer-right {
            flex-direction: column;
            width: 100%;
          }

          .social-link {
            justify-content: center;
          }
        }
      `}</style>

      {/* <div className="floating-particles">
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
      </div> */}

      {/* <div className="footer-divider"></div> */}

      <div className="footer-content">
        <div className="footer-left">
          <div className="footer-logo">M Abdul Ghofur</div>
          <p className="footer-copyright">&copy; 2025 All rights reserved</p>
        </div>

        <div className="footer-right">
          <a
            href="https://github.com/algar12"
            target="_blank"
            rel="noreferrer"
            className="social-link github"
          >
            <GithubIcon />
            <span>GitHub</span>
          </a>

          <a
            href="https://www.instagram.com/gopungs1"
            target="_blank"
            rel="noreferrer"
            className="social-link instagram"
          >
            <InstagramIcon />
            <span>Instagram</span>
          </a>

          <a
            href="https://www.facebook.com/profile.php?id=61561923156318"
            target="_blank"
            rel="noreferrer"
            className="social-link facebook"
          >
            <FacebookIcon />
            <span>Facebook</span>
          </a>

          {/* <a
            href="https://linkedin.com/in/your-profile"
            target="_blank"
            rel="noreferrer"
            className="social-link linkedin"
          >
            <LinkedinIcon />
            <span>LinkedIn</span>
          </a> */}
        </div>
      </div>
    </footer>
  );
}

export default Footer;