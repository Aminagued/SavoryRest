import "./Home.scss";

const Home = () => {
  return (
    <section id="home" className="home">
      <div className="home-content">
        <div className="text-content">
          <h2>Experience Culinary Excellence</h2>
          <h1>Savory Restaurant</h1>
          <p>
            Indulge in a symphony of flavors crafted by our master chefs using
            the finest ingredients sourced locally and globally.
          </p>
          <button className="cta-button">Reserve a Table</button>
        </div>
        <div className="image-content">
          <div className="image-placeholder">
            <div className="overlay"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
