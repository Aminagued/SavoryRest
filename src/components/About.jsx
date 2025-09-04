import "./About.scss";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2>Our Story</h2>
            <p className="intro">
              Savory began as a dream between two friends who shared a passion
              for exceptional food and genuine hospitality.
            </p>
            <div className="story">
              <p>
                Founded in 2010, our restaurant has been serving innovative
                cuisine that blends traditional techniques with modern flavors.
                Our chefs travel the world to discover new ingredients and
                inspiration, bringing back unique culinary experiences to share
                with our guests.
              </p>
              <p>
                We believe in sustainability and source our ingredients from
                local farmers and producers whenever possible. Each dish tells a
                story of seasonality, craftsmanship, and the love we have for
                creating memorable dining experiences.
              </p>
            </div>
            <div className="features">
              <div className="feature">
                <h3>Fresh Ingredients</h3>
                <p>Locally sourced, seasonal produce delivered daily</p>
              </div>
              <div className="feature">
                <h3>Master Chefs</h3>
                <p>Internationally trained culinary experts</p>
              </div>
              <div className="feature">
                <h3>Seasonal Menu</h3>
                <p>Changing quarterly to showcase the best of each season</p>
              </div>
            </div>
          </div>
          <div className="about-image">
            <div className="image-frame">
              <div className="image-placeholder"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
