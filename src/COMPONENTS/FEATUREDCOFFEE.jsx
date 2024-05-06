import "../styles/FEATUREDCOFFEE.css";

const FeaturedCoffee = () => {
  return (
    <section className="featuredCoffee">
      <h1 className="Label">Featured Coffee</h1>
      <div className="featuredContainer">
        <div className="featuredCard">
          <div className="francisco image"></div>
          <div className="imageHead">San Francisco Blend</div>
          <div className="imageInfo">
            A medium roast with notes of chocolate, caramel, and cherry
          </div>
        </div>
        <div className="featuredCard">
          <div className="Chinatown image"></div>
          <div className="imageHead">Chinatown Blend</div>
          <div className="imageInfo">
            A dark roast with notes of cocoa, nuts, and spices
          </div>
        </div>
        <div className="featuredCard">
          <div className="missionDistrict image"></div>
          <div className="imageHead">Mission District Blend</div>
          <div className="imageInfo">
            A light roast with notes of citrus, berries, and florals
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCoffee;
