import { Suspense, lazy } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));

const App = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Main page</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
        <meta name="description" content="Home page description" />
      </Helmet>

      <BrowserRouter>
        <nav>
          <Link to={"/"}>Home</Link> <Link to={"/about"}>About</Link>
        </nav>
        <Suspense fallback={"Loading..."}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </HelmetProvider>
  );
};

export default App;
