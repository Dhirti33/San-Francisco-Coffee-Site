import "../styles/POPULARBREAKFAST.css";

const PopularBreakfast = () => {
  return (
    <section className="popularBreakfast">
      <h1 className="Label">Popular Breakfast</h1>
      <div className="popularContainer">
        <div className="popularCard">
          <div className="avocadoToast image"></div>
          <div className="imageHead">Avocado Toast</div>
          <div className="imageInfo">
            Smashed avocado, cherry tomatoes, radishes, and microgreens on
            multigrain toast
          </div>
        </div>
        <div className="popularCard">
          <div className="breakfastBurrito image"></div>
          <div className="imageHead">Breakfast Burrito</div>
          <div className="imageInfo">
            Scrambled eggs, black beans, pico de gallo, cheddar , and guacamole
            in the flour tortilla
          </div>
        </div>
        <div className="popularCard">
          <div className="chiaPudding image"></div>
          <div className="imageHead">Chia Pudding</div>
          <div className="imageInfo">
            Chia seed in almond milk with vanilla, agave, fresh fruit, and
            granola
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularBreakfast;
