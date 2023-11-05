import { useState } from "react";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Landing from "./Components/Landing";
import BookDetails from "./Components/BookDetails";
import "./App.css";

function App() {
  return (
    <>
      <div className="front-page">
        <BookDetails />
        {/* <Header /> */}
        {/* <Body /> */}
        {/* <Landing /> */}
      </div>
    </>
  );
}

export default App;
