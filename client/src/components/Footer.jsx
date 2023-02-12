import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faFacebook,
  faTwitter,
  faInstagram,
  faGithub
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const year = new Date().getFullYear();

  return <div>
  <footer className='pt-7 grid justify-items-center'>{`Created By Hemant ${year}`}</footer>
  <p className='pt-0 grid justify-items-center'>My Socials</p>
  <div className='flex justify-start justify-center'>
  <a className='pt-2 pr-2 pl-2 grid justify-items-center' href="https://www.linkedin.com/in/heman10x/" target="_blank">
     <FontAwesomeIcon icon={faLinkedin} size="2x" />
    </a>
    <a className='pt-2 pr-2 pl-2 grid justify-items-center' href="https://twitter.com/Heman10x" target="_blank">
     <FontAwesomeIcon icon={faTwitter} size="2x" />
    </a>
    <a className='pt-2 pr-2 pl-2 grid justify-items-center' href="https://github.com/Heman10x-NGU" target="_blank">
     <FontAwesomeIcon icon={faGithub} size="2x" />
    </a>
    </div>

  </div>
};

export default Footer;





