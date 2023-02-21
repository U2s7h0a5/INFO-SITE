import React from "react";
import "./Card.css";

const Card = () => {
  return (
    <div className="card">
      <img
        className="pic"
        src="https://www.shutterstock.com/image-photo/young-beautiful-happy-businesswoman-sitting-260nw-165623561.jpg"
        alt="pic"
      />
      <div className="main">
      <h4 className="title"> Laura Smith</h4>
      <div className="buttons">      
        <button className="email">Email</button>
        <button className="phone">Phone</button>
      </div>
      <h5 className="about"> About </h5>
      <small className="about-data">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud.
      </small>
      <h5 className="interest"> Interest</h5>
      <small className="interest-data">
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia.
      </small>
      </div>
      <div className="end">
      <div className="footer">
      <i class="fa-brands fa-square-twitter fa-lg"></i>
      <i class="fa-brands fa-facebook fa-lg"></i>
      <i class="fa-brands fa-square-instagram fa-lg"></i>
      <i class="fa-brands fa-github fa-lg"></i>
      </div>
      </div>
    </div>
  );
};

export default Card;
