import "../styles/BESTSELLINGCOFFEE.css";

const BestSellingCoffee = () => {
  return (
    <section className="bestSellingCoffee">
      <h1 className="Label">Best Selling Coffee Beans</h1>
      <div className="bestSellingContainer">
        <div className="bestSellingCard">
          <div className="hayesValley image"></div>
          <div className="imageHead">Hayes Valley Espresso</div>
          <div className="imageInfo">
            Rich and balanced espresso blend from San Francisco
          </div>
        </div>
        <div className="featuredCard">
          <div className="giantSteps image"></div>
          <div className="imageHead">Giant Steps Blend</div>
          <div className="imageInfo">
            Fruit-forward blend with a smooth finish
          </div>
        </div>
        <div className="featuredCard">
          <div className="threeAfricas image"></div>
          <div className="imageHead">Three Africas Blend</div>
          <div className="imageInfo">
            Bright and complex blend with floral and berry notes
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestSellingCoffee;
