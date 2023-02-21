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
      <h3 className="title"> Laura Smith</h3>
      <div className="buttons">
      <button type="button" class="btn btn-default btn-sm">Email</button>
        <button type="button" class="btn btn-primary btn-sm">
          Number
        </button>
      </div>
      <h4 className="about"> About </h4>
      <small className="about-data">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud.
      </small>
      <h4 className="interest"> Interest</h4>
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
