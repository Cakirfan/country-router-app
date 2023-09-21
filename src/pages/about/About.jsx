import React from "react";
import about from "../../img/about.webp"

const About = () => {
  return (
    <div className="container d-flex" style={{ marginTop: "9rem" }}>
      <div>
        <img src={about} alt={about} />
      </div>
      <div className="m-5">
        <h1 className="mb-4">About This App</h1>
        <p className="lh-lg fw-medium">
          The Country App is a great resource for people who are interested in
          learning more about different cultures, histories, and geographies.
          With detailed information about 250 countries around the world, you'll
          be able to explore and discover new things about the world we live in.
        </p>
        <p className="lh-lg fw-medium">
          You can search for any country and get detailed information about its
          geography, culture, government, population, and more. The app also
          includes interactive map informations to help you better understand
          each country. Plus, you can save your favorite countries and share
          information with others through social media.
        </p>
        <p className="lh-lg fw-medium">
          Additionally, we have designed the app to be responsive and adaptable
          to different screen sizes to ensure a seamless experience for all
          users, whether they are using a phone, tablet, or desktop computer. We
          are committed to providing the best possible experience for our users,
          and we are always looking for ways to improve and enhance our app.
        </p>
      </div>
    </div>
  );
};

export default About;
