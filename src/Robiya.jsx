import React from 'react';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import './CardStyles.css'; // css faylga style-larni joylashtirin
const Robiya = (Props) => { 
  return (
<div>
<div className="card__collection clear-fix">

     
      <div className="cards cards--two">
        <img
          src={Props.Rasm}
          className="img-responsive"
          alt="Lucy Grace"
        />
        <span className="cards--two__rect"></span>
        <span className="cards--two__tri"></span>
        <p>Lucy Grace</p>
        <ul className="cards__list">
          <li><FontAwesomeIcon icon={faFacebookF} /></li>
          <li><FontAwesomeIcon icon={faTwitter} /></li>
          <li><FontAwesomeIcon icon={faInstagram} /></li>
          <li><FontAwesomeIcon icon={faLinkedinIn} /></li>
        </ul>
      </div>
      <div className="cards cards--two">
        <img
          src={Props.Rasm1}
          className="img-responsive"
          alt="Lucy Grace"
        />
        <span className="cards--two__rect"></span>
        <span className="cards--two__tri"></span>
        <p>Lucy Grace</p>
        <ul className="cards__list">
          <li><FontAwesomeIcon icon={faFacebookF} /></li>
          <li><FontAwesomeIcon icon={faTwitter} /></li>
          <li><FontAwesomeIcon icon={faInstagram} /></li>
          <li><FontAwesomeIcon icon={faLinkedinIn} /></li>
        </ul>
      </div>
      <div className="cards cards--two">
        <img
          src
          className="img-responsive"
          alt="Lucy Grace"
        />
        <span className="cards--two__rect"></span>
        <span className="cards--two__tri"></span>
        <p>Lucy Grace</p>
        <ul className="cards__list">
          <li><FontAwesomeIcon icon={faFacebookF} /></li>
          <li><FontAwesomeIcon icon={faTwitter} /></li>
          <li><FontAwesomeIcon icon={faInstagram} /></li>
          <li><FontAwesomeIcon icon={faLinkedinIn} /></li>
        </ul>
      </div>
      <div className="cards cards--two">
        <img
          src="https://images.unsplash.com/photo-1504703395950-b89145a5425b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d702cb99ca804bffcfa8820c46483264&auto=format&fit=crop&w=651&q=80"
          className="img-responsive"
          alt="Lucy Grace"
        />
        <span className="cards--two__rect"></span>
        <span className="cards--two__tri"></span>
        <p>Lucy Grace</p>
        <ul className="cards__list">
          <li><FontAwesomeIcon icon={faFacebookF} /></li>
          <li><FontAwesomeIcon icon={faTwitter} /></li>
          <li><FontAwesomeIcon icon={faInstagram} /></li>
          <li><FontAwesomeIcon icon={faLinkedinIn} /></li>
        </ul>
      </div>
      <div className="cards cards--two">
        <img
          src="https://images.unsplash.com/photo-1504703395950-b89145a5425b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d702cb99ca804bffcfa8820c46483264&auto=format&fit=crop&w=651&q=80"
          className="img-responsive"
          alt="Lucy Grace"
        />
        <span className="cards--two__rect"></span>
        <span className="cards--two__tri"></span>
        <p>Lucy Grace</p>
        <ul className="cards__list">
          <li><FontAwesomeIcon icon={faFacebookF} /></li>
          <li><FontAwesomeIcon icon={faTwitter} /></li>
          <li><FontAwesomeIcon icon={faInstagram} /></li>
          <li><FontAwesomeIcon icon={faLinkedinIn} /></li>
        </ul>
      </div>
    </div>
</div>
   
  )
}

export default Robiya