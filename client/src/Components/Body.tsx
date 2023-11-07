import React from "react";
import background from "../../fotos/photo-1542273917363-3b1817f69a2d.webp";
import Book from "./Book";
import Header from "./Header";
function Body() {
  return (
    <>
      {" "}
      <Header />
      <div className="body">
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
      </div>
    </>
  );
}

export default Body;
