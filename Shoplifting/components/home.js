import React from "react";
import Header from "./header";
import "./home.css";
import myImage from '../Assests/icon.png';
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <div className="home-container">
      <Header />
      <div className="image-text-section">
        <img src={myImage} alt="Shoplifting Detection" className="animated-image" />
        <p className="animated-text">
            Protect your assets with our cutting-edge technology.
            With our product, You could able to find shoplifters who are ready to snatch away your profits.We will only need the Live CCTV footage in the shop.which will helps you to monitor the shop for 24/7 hours.
        </p>
      </div>
      <div className="semi-circle-container">
        <div className="semi-circle-content">
          <h2>SO WHY ARE YOU WAITING!!</h2>
          <input type="email" placeholder="Enter your email address" />
          <Link to="/login">
            <button>Let's Dive</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

