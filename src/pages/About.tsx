import { Helmet, HelmetProvider } from "react-helmet-async";

const About = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <meta charSet="utf-8" />
        <title>About page</title>
        <meta name="description" content="About page description" />
      </Helmet>

      <h1>About</h1>
      <br />
      <hr />
      <br />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ipsa
        modi, assumenda nemo dolore quod minima totam quia eius, voluptatibus
        quis, facilis nisi facere nostrum excepturi illo quae eum ducimus.
      </p>
    </HelmetProvider>
  );
};

export default About;
