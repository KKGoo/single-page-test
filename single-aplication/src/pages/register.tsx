import React from "react";
import { Link } from "react-router-dom";
import "../styles/register.css"


const Register = () => {
  return (
    <div className="Register">
      <div className="Register__container">
        <div className="backgrounds-register">
          <ul>
            <li>make sure you complete all the camps </li> 
            <li>make sure you put you full name or at least ur fitst and last name</li>
            <li>accept terms and conditions</li>
          </ul>
        </div>
        <form className="Form__container" action="">
          <h1 className="Form__header">Register</h1>
          <div>
          <div className="Form__input-container">
              <p className="Form__input-label">Full Name</p>
              <input className="Form__input" type="text" />
            </div>
            <div className="Form__input-container">
              <p className="Form__input-label">Email</p>
              <input className="Form__input" type="text" />
            </div>
            <div className="Form__input-container">
              <p className="Form__input-label">username</p>
              <input className="Form__input" type="text" />
            </div>
            
            <div className="Form__input-container">
              <p className="Form__input-label">password</p>
              <input className="Form__input" type="text" />
            </div>
            <div className="Form__checkbox-container">
              <input className="Form__input-checkbox" type="checkbox" />
              <p>Terms and conditions</p>
            </div>
          </div>
          <div className="Form__buttons">
            <button className="Form__button">Sign up</button>
            <Link to="/">Sign in</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
