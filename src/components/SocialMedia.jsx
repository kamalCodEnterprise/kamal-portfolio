/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-indent */
import React from 'react';
// eslint-disable-next-line no-unused-vars
import { BsLinkedin, BsGithub, BsFillEnvelopeFill, BsWhatsapp } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href="https://www.linkedin.com/in/kamal-jameel-6085a218a/">
         <BsLinkedin />
      </a>
    </div>
    <div>
      <a href="mailto:kamaljameel14@gmail.com">
      <BsFillEnvelopeFill />
      </a>
    </div>
    <div>
       <a href="https://wa.me/+923479670713" target="_blank" rel="noreferrer">
      <BsWhatsapp />
       </a>
    </div>
    <div>
      <BsGithub />
    </div>
    <div>
      <a href="https://www.facebook.com/kamal.jameel.965">
      <FaFacebookF />
      </a>
    </div>
  </div>
);

export default SocialMedia;
