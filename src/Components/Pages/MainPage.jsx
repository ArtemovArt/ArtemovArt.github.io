import React from "react";
import Footer from "../Footer";
import GamesPreview from "../GamesPreview";
import Header from "../Header";
import Home from "../Home";
import TextbookPreview from "../TextbookPreview";

const MainPage = () => {
  return (
    <div className="App">
      <Header />
      <Home />
      <GamesPreview />
      <TextbookPreview />
      <Footer />
    </div>
  );
};

export default MainPage;
