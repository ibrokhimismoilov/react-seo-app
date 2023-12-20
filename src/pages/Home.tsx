import { Helmet, HelmetProvider } from "react-helmet-async";

const Home = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home page</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
        <meta name="description" content="Home page description" />
      </Helmet>

      <h1>Home</h1>
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

export default Home;
