import React, { useState, useEffect } from "react";
import mainBg from "./assets/bg.mp4";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import Contact from "./components/Contact";
import Team from "./Pages/Team";
import About from "./Pages/AboutOld";
import Eventpage from "./Pages/Eventpage";
import Eventslider from "./components/Eventslider";
import TeamsPills from "./components/TeamsPills";
import Register from "./Pages/Register";
import Loader from "./components/Loader";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="app-container relative min-h-screen">
          <video
            autoPlay
            loop
            muted
            playsInline
            id="mainBgVideo"
            className="fixed top-0 left-0 w-screen h-screen object-cover -z-20"
            style={{
              objectFit: "cover",
              objectPosition: "center",
            }}
          >
            <source
              src={mainBg}
              type="video/mp4"
            />
          </video>
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={<Home />}
            />
            <Route
              path="/about"
              element={<About />}
            />
            <Route
              path="/event"
              element={<Eventpage />}
            />
            <Route
              path="/team"
              element={<Team />}
            />
            <Route
              path="/register"
              element={<Register />}
            />
          </Routes>
        </div>
      )}
    </>
  );
};

export default App;
