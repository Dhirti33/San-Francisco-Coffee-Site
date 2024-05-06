import "../styles/FOOTER.css";

const Footer = () => {
  return (
    <section className="footer">
      <div className="grat">
        <div className="logo"></div>
        <div className="text">
          We will continue to provide the best coffee for your liking
        </div>
      </div>
      <div className="contact">
        <h3>Contact</h3>
        <div className="street sign">
          <div className="svg">
            <img
              width="20"
              height="20"
              src="https://img.icons8.com/ios/50/marker--v1.png"
              alt="marker--v1"
            />
          </div>
          <div className="address TT">GPS 254866, Accra, Ghana</div>
        </div>
        <div className="email sign">
          <div className="svg">
            <img
              width="20"
              height="20"
              src="https://img.icons8.com/ios/50/new-post--v1.png"
              alt="new-post--v1"
            />
          </div>
          <div className="gmail TT">lomokodesmond@gmail.com</div>
        </div>
        <div className="number sign">
          <div className="svg">
            <img
              width="20"
              height="20"
              src="https://img.icons8.com/ios/50/phone--v1.png"
              alt="phone--v1"
            />
          </div>
          <div className="num TT">054 834 1442</div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
