import React from "react";
import { NavLink } from "react-router-dom";
// import {} from react
import "../Css/Home.css";
import umar from "../image/pexels-ali-pazani-2887768.jpg";

export default function Home() {
  return (
    <>
      <header>
        <div className="container">
          <div className="sec-data">
            <p>This is me</p>
            <h1>
              Mohammad <br /> Umar
            </h1>
            <p className="hero-para">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et harum
              qui minima nesciunt repellat magni quos quod velit illum?
              Expedita!
            </p>
            <button className="btn">
              <NavLink to="/contact" className="btn-nav">
                Hire me
              </NavLink>
            </button>
          </div>
          <div className="sec-img">
            <img src={umar} alt="" width={200} />
          </div>
        </div>
      </header>
    </>
  );
}
