import "../styles/HEADER.css";
import Logo from "../assets/Untitled_design-removebg-preview.png";
import { useState } from "react";

const Header = () => {
  const [sideMenu, setSideMenu] = useState(false);

  const openSide = () => {
    setSideMenu(true);
  };

  const closeSide = () => {
    setSideMenu(!sideMenu);
  };

  return (
    <nav className="navBar">
      <div className="navLeft">
        <div className="shopLogo">
          <img src={Logo} alt="" />
        </div>
        <div className="shopName">San Francisco Coffee Co.</div>
      </div>
      <div className="navRight">
        <div className="tabs">
          <div className="shop tab">Shop</div>
          <div className="subscriptions tab">Subscriptions</div>
          <div className="samraOrigin tab">Samra Origins</div>
          <div className="learn tab">Learn</div>
          <div className="locations tab">Location</div>
        </div>
        <div className="buttons">
          <div className="search btn">
            <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M-2.3-182.9c-10.7 0-19.5-8.7-19.5-19.5 0-10.7 8.7-19.5 19.5-19.5s19.5 8.7 19.5 19.5c-.1 10.8-8.8 19.5-19.5 19.5zm0-36.1c-9.2 0-16.7 7.5-16.7 16.7s7.5 16.7 16.7 16.7 16.7-7.5 16.7-16.7c-.1-9.2-7.6-16.7-16.7-16.7z"
                transform="translate(30 230)"
                fill="#000000"
              ></path>
              <path
                d="m23.7-174.2-13.6-13.5 2.2-2.2 13.5 13.6-2.1 2.1"
                transform="translate(30 230)"
                fill="#000000"
              ></path>
            </svg>
          </div>
          <div className="profile btn">
            <svg
              height="128px"
              id="Layer_1"
              version="1.1"
              viewBox="0 0 128 128"
              width="128px"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M64.281,84.291c-15.54,0-28.184-12.643-28.184-28.184V42.196c0-15.542,12.644-28.186,28.184-28.186  c15.542,0,28.186,12.644,28.186,28.186v13.911C92.467,71.648,79.823,84.291,64.281,84.291z M64.281,18.01  c-13.335,0-24.184,10.85-24.184,24.186v13.911c0,13.334,10.849,24.184,24.184,24.184c13.336,0,24.186-10.85,24.186-24.184V42.196  C88.467,28.86,77.617,18.01,64.281,18.01z" />
              <path d="M102.332,114.01h-76.51c-6.518,0-11.819-5.303-11.819-11.82v-8.734c0-3.857,1.953-9.027,11.26-11.738l11.443-3.168  c1.067-0.291,2.167,0.33,2.461,1.395s-0.33,2.166-1.395,2.461l-11.417,3.16c-8.353,2.434-8.353,6.541-8.353,7.891v8.734  c0,4.313,3.508,7.82,7.819,7.82h76.51c4.312,0,7.819-3.508,7.819-7.82v-8.734c0-3.643-2.816-6.299-8.372-7.896l-10.892-3.045  c-1.064-0.297-1.686-1.4-1.388-2.465c0.298-1.063,1.398-1.689,2.464-1.387l10.906,3.049c9.326,2.682,11.281,7.867,11.281,11.744  v8.734C114.151,108.707,108.85,114.01,102.332,114.01z" />
            </svg>
          </div>
          <div className="cart btn">
            <svg
              height="50px"
              id="Layer_1"
              version="1.1"
              viewBox="0 0 50 50"
              width="50px"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8,14L4,49h42l-4-35H8z" fill="none" stroke="#000000" />
              <rect fill="none" height="50" width="50" />
              <path
                d="M34,19c0-1.241,0-6.759,0-8  c0-4.971-4.029-9-9-9s-9,4.029-9,9c0,1.241,0,6.759,0,8"
                fill="none"
                stroke="#000000"
              />
              <circle cx="34" cy="19" r="2" />
              <circle cx="16" cy="19" r="2" />
            </svg>
          </div>
        </div>
        <div className="humberger" onClick={openSide}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 50 50"
            width="50px"
            height="50px"
          >
            <path d="M 0 9 L 0 11 L 50 11 L 50 9 Z M 0 24 L 0 26 L 50 26 L 50 24 Z M 0 39 L 0 41 L 50 41 L 50 39 Z" />
          </svg>
        </div>
      </div>
      <div className={sideMenu ? "side-menu open" : "side-menu"}>
        <div className="cancel" onClick={closeSide}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24px"
            height="24px"
          >
            <path d="M 4.2382812 2.9882812 A 1.250125 1.250125 0 0 0 3.3671875 5.1347656 L 10.232422 12 L 3.3613281 18.869141 A 1.2512475 1.2512475 0 1 0 5.1308594 20.638672 L 12 13.767578 L 18.865234 20.632812 A 1.250125 1.250125 0 1 0 20.632812 18.865234 L 13.767578 12 L 20.625 5.1425781 A 1.250125 1.250125 0 1 0 18.857422 3.375 L 12 10.232422 L 5.1347656 3.3671875 A 1.250125 1.250125 0 0 0 4.2382812 2.9882812 z" />
          </svg>
        </div>
        <div className="Side-tabs">
          <div className="shop side">Shop</div>
          <div className="subscriptions side">Subscriptions</div>
          <div className="samraOrigin side">Samra Origins</div>
          <div className="learn side">Learn</div>
          <div className="locations side">Location</div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
