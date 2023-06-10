import React from 'react';
import './Footer.css';
import twitterLogo from '../../assets/twitter.png';
import githubLogo from '../../assets/github.png';
import linkedinLogo from '../../assets/linkedin.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="column">
          <div className="column-title">About Me</div>
          <div className="social-handles">
            <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer">
              <img src={twitterLogo} alt="Twitter Logo" />
            </a>
            <a href="https://github.com/yourhandle" target="_blank" rel="noopener noreferrer">
              <img src={githubLogo} alt="GitHub Logo" />
            </a>
            <a href="https://linkedin.com/in/yourhandle" target="_blank" rel="noopener noreferrer">
              <img src={linkedinLogo} alt="LinkedIn Logo" />
            </a>
          </div>
        </div>
        <div className="column">
          <div className="column-title">Aim</div>
          <div className="aim">
          <p>I am a second-year student at IT-Ropar, made these algorithms to help in the field of medical sciences.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
