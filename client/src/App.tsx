import { useState } from "react";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Landing from "./Components/Landing";
import BookDetails from "./Components/BookDetails";
import CreateBook from "./Components/CreateBook";
import Login from "./Components/Login";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div className="front-page">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/Body" element={<Body />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/BookDetails" element={<BookDetails />} />
          <Route path="/CreateBook" element={<CreateBook />} />
        </Routes>

        {/* <BookDetails /> */}
        {/* <CreateBook /> */}
        {/* <Header /> */}
        {/* <Body /> */}
        {/* <Landing /> */}
      </div>
    </>
  );
}

export default App;
