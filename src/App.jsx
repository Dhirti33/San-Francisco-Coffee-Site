import "./App.css";
import BestSellingCoffee from "./COMPONENTS/BESTSELLINGCOFFEE.jsx";
import Footer from "./COMPONENTS/FOOTER.jsx";
import FeaturedCoffee from "./COMPONENTS/FEATUREDCOFFEE.jsx";
import Header from "./COMPONENTS/HEADER";
import PopularBreakfast from "./COMPONENTS/POPULARBREAKFAST.jsx";
import Shop from "./COMPONENTS/SHOP";

function App() {
  return (
    <>
      <Header />
      <main className="app">
        <Shop />
        <FeaturedCoffee />
        <BestSellingCoffee />
        <PopularBreakfast />
      </main>
      <Footer/>
    </>
  );
}

export default App;
