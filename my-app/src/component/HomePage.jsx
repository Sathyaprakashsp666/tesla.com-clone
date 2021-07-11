import React from "react";
import { Link } from "react-router-dom";
import "./Homepage.css";

function HomePage() {
  return (
    <div className="homepage">
      <div className="homepage__info">
        <div className="homepage__infoText">
          <h1>Model S</h1>
          <h4>
            Order Online for <Link>Touchless Delivery</Link>
          </h4>
        </div>
        <div className='homepage__carBtn'>
            <button className="homepage__buttonOne">CUSTOM ORDER</button>
            <button className="homepage__buttonTwo">EXISTING INVENTORY</button>

        </div>
      </div>
    </div>
  );
}

export default HomePage;
